/**
 * Client-Side PBKDF2 Password Authentication Utility
 * Uses the Web Crypto API for secure key derivation (PBKDF2-HMAC-SHA-256).
 *
 * NOTE: As documented in the security specification, client-side authentication
 * on static sites like GitHub Pages serves as a casual barrier against unauthorized
 * edits. True security requires server-side authorization.
 */

const PasswordAuth = (function () {
  'use strict';

  /**
   * Converts a hexadecimal string to a Uint8Array
   * @param {string} hex
   * @returns {Uint8Array}
   */
  function hexToBytes(hex) {
    if (!hex || typeof hex !== 'string') {
      throw new Error('Invalid hex string provided.');
    }
    const cleanHex = hex.trim();
    if (cleanHex.length % 2 !== 0) {
      throw new Error('Hex string must have an even length.');
    }
    const bytes = new Uint8Array(cleanHex.length / 2);
    for (let i = 0; i < cleanHex.length; i += 2) {
      bytes[i / 2] = parseInt(cleanHex.substring(i, i + 2), 16);
    }
    return bytes;
  }

  /**
   * Converts a Uint8Array to a hexadecimal string
   * @param {Uint8Array|ArrayBuffer} buffer
   * @returns {string}
   */
  function bytesToHex(buffer) {
    const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
    return Array.from(bytes)
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }

  /**
   * Checks if the Web Crypto API is available in this browser environment
   * @returns {boolean}
   */
  function isWebCryptoAvailable() {
    return !!(window.crypto && window.crypto.subtle);
  }

  /**
   * Derives a PBKDF2-HMAC-SHA-256 key from a plaintext password and salt
   * @param {string} password
   * @param {Uint8Array} saltBytes
   * @param {number} iterations
   * @param {number} keyLengthBits
   * @returns {Promise<Uint8Array>}
   */
  async function derivePbkdf2Bits(password, saltBytes, iterations, keyLengthBits = 256) {
    if (!isWebCryptoAvailable()) {
      throw new Error('Web Crypto API is not available in this browser context (HTTPS or localhost is required).');
    }

    const encoder = new TextEncoder();
    const passwordBuffer = encoder.encode(password);

    const baseKey = await window.crypto.subtle.importKey(
      'raw',
      passwordBuffer,
      { name: 'PBKDF2' },
      false,
      ['deriveBits']
    );

    const derivedBits = await window.crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt: saltBytes,
        iterations: iterations,
        hash: 'SHA-256'
      },
      baseKey,
      keyLengthBits
    );

    return new Uint8Array(derivedBits);
  }

  /**
   * Constant-time byte array comparison to mitigate timing leaks
   * @param {Uint8Array} a
   * @param {Uint8Array} b
   * @returns {boolean}
   */
  function constantTimeCompare(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    let mismatch = 0;
    for (let i = 0; i < a.length; i++) {
      mismatch |= a[i] ^ b[i];
    }
    return mismatch === 0;
  }

  /**
   * Verifies an entered password against the authConfig stored in questions.json
   * @param {string} inputPassword
   * @param {object} authConfig
   * @returns {Promise<{success: boolean, error?: string}>}
   */
  async function verifyPassword(inputPassword, authConfig) {
    if (!authConfig) {
      return { success: false, error: 'Authentication configuration is missing.' };
    }
    if (!authConfig.salt || !authConfig.passwordHash) {
      return { success: false, error: 'Incomplete authentication parameters.' };
    }
    if (typeof inputPassword !== 'string' || inputPassword.length === 0) {
      return { success: false, error: 'Password cannot be empty.' };
    }

    const iterations = parseInt(authConfig.iterations, 10) || 600000;
    if (iterations < 10000) {
      return { success: false, error: 'Iteration count is suspiciously low.' };
    }

    try {
      const saltBytes = hexToBytes(authConfig.salt);
      const expectedHashBytes = hexToBytes(authConfig.passwordHash);

      const derivedBytes = await derivePbkdf2Bits(inputPassword, saltBytes, iterations, 256);
      const isMatch = constantTimeCompare(derivedBytes, expectedHashBytes);

      return { success: isMatch, error: isMatch ? null : 'Incorrect administrator password.' };
    } catch (err) {
      return { success: false, error: err.message || 'Cryptographic verification failed.' };
    }
  }

  /**
   * Generates a new salt and PBKDF2 hash for a new admin password
   * @param {string} newPassword
   * @param {number} iterations
   * @returns {Promise<object>}
   */
  async function generateAuthBlock(newPassword, iterations = 600000) {
    if (!isWebCryptoAvailable()) {
      throw new Error('Web Crypto API is required to generate credentials.');
    }
    if (!newPassword || typeof newPassword !== 'string') {
      throw new Error('A valid password string is required.');
    }

    const saltBytes = new Uint8Array(16);
    window.crypto.getRandomValues(saltBytes);

    const derivedBytes = await derivePbkdf2Bits(newPassword, saltBytes, iterations, 256);

    return {
      algorithm: 'PBKDF2',
      hashAlgorithm: 'SHA-256',
      iterations: iterations,
      salt: bytesToHex(saltBytes),
      passwordHash: bytesToHex(derivedBytes)
    };
  }

  return {
    isWebCryptoAvailable,
    hexToBytes,
    bytesToHex,
    verifyPassword,
    generateAuthBlock
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PasswordAuth;
}
