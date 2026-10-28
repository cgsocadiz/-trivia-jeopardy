#!/usr/bin/env node
/**
 * Developer Utility: Generate PBKDF2 Password Hash for questions.json adminAuth
 * Usage: node scripts/generate-password-hash.js [password] [iterations]
 * Example: node scripts/generate-password-hash.js admin 600000
 */

const crypto = require('crypto');

const password = process.argv[2] || 'admin';
const iterations = parseInt(process.argv[3], 10) || 600000;
const saltBytes = crypto.randomBytes(16);
const saltHex = saltBytes.toString('hex');

const derivedKey = crypto.pbkdf2Sync(password, saltBytes, iterations, 32, 'sha256');
const hashHex = derivedKey.toString('hex');

const adminAuthConfig = {
  algorithm: 'PBKDF2',
  hashAlgorithm: 'SHA-256',
  iterations: iterations,
  salt: saltHex,
  passwordHash: hashHex
};

console.log('\n=== Trivia Jeopardy Admin Auth Generator ===\n');
console.log('Password (keep secret):', password);
console.log('Iterations:', iterations);
console.log('\nCopy and paste this "adminAuth" block into assets/data/questions.json:\n');
console.log(JSON.stringify(adminAuthConfig, null, 2));
console.log('\n============================================\n');
