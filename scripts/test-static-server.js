const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8089;
const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  let filePath = path.join(__dirname, '..', urlPath === '/' ? 'index.html' : urlPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
      return;
    }

    let contentType = 'text/plain';
    if (filePath.endsWith('.html')) contentType = 'text/html';
    else if (filePath.endsWith('.css')) contentType = 'text/css';
    else if (filePath.endsWith('.js')) contentType = 'application/javascript';
    else if (filePath.endsWith('.json')) contentType = 'application/json';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, async () => {
  console.log(`Test HTTP Server running on http://localhost:${PORT}`);
  try {
    const urlsToTest = [
      '/',
      '/index.html',
      '/admin.html',
      '/assets/css/styles.css',
      '/assets/css/admin.css',
      '/assets/data/questions.json',
      '/assets/js/sample-data.js',
      '/assets/js/password-auth.js',
      '/assets/js/game-state.js',
      '/assets/js/scoring.js',
      '/assets/js/animations.js',
      '/assets/js/persistence.js',
      '/assets/js/game-engine.js',
      '/assets/js/board.js',
      '/assets/js/app.js',
      '/assets/js/admin.js'
    ];

    for (const u of urlsToTest) {
      const resp = await fetch(`http://localhost:${PORT}${u}`);
      if (resp.status !== 200) {
        throw new Error(`Failed to load ${u}: status ${resp.status}`);
      }
      console.log(`✓ HTTP 200: ${u} (${resp.headers.get('content-type')})`);
    }

    // Verify all asset references in index.html are strictly relative (no leading slash /)
    const indexHtml = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
    const adminHtml = fs.readFileSync(path.join(__dirname, '..', 'admin.html'), 'utf8');

    const checkRelativePaths = (html, filename) => {
      const regex = /(?:src|href)=["']\/([a-zA-Z0-9_\-./]+)["']/g;
      let match;
      while ((match = regex.exec(html)) !== null) {
        if (!match[0].startsWith('//')) {
          throw new Error(`Non-relative path found in ${filename}: "${match[0]}"`);
        }
      }
      console.log(`✓ ${filename} asset links are strictly relative (safe for GitHub Pages repo subpaths).`);
    };

    checkRelativePaths(indexHtml, 'index.html');
    checkRelativePaths(adminHtml, 'admin.html');

    console.log('\n--- ALL HTTP AND ASSET PATH TESTS PASSED! ---');
  } catch (err) {
    console.error('Test error:', err);
    process.exit(1);
  } finally {
    server.close();
  }
});
