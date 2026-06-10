import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.join(__dirname, '../build');
const rootDir = path.join(__dirname, '..');

// Ensure build directory exists
if (!fs.existsSync(buildDir)) {
  console.error('Build directory not found. Run `npm run build` first.');
  process.exit(1);
}

// Sync files from build/ to root
function syncFiles(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);
  files.forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    // Skip syncing the html folder from build (we'll handle routes separately)
    if (file === 'html' || file === '.DS_Store') {
      return;
    }

    if (fs.statSync(srcPath).isDirectory()) {
      syncFiles(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✓ ${destPath}`);
    }
  });
}

// Create HTML files at root for GitHub Pages deep-linking
function createRouteHtmlFiles() {
  const routes = ['about', 'projects', 'contact'];
  const indexHtml = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');

  routes.forEach((route) => {
    // Create <route>.html in root for direct access
    fs.writeFileSync(path.join(rootDir, `${route}.html`), indexHtml);
    console.log(`✓ Created /${route}.html for deep linking`);

    // Create <route>/index.html for GitHub Pages to serve on /<route>/ URLs
    const routeDir = path.join(rootDir, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml);
    console.log(`✓ Created /${route}/index.html for /${route}/ routing`);
  });

  // Also copy index.html to root if not already there
  if (!fs.existsSync(path.join(rootDir, 'index.html'))) {
    fs.copyFileSync(path.join(buildDir, 'index.html'), path.join(rootDir, 'index.html'));
  }

  // Copy 404.html if it exists (for client-side routing fallback)
  if (fs.existsSync(path.join(buildDir, '404.html'))) {
    fs.copyFileSync(path.join(buildDir, '404.html'), path.join(rootDir, '404.html'));
    console.log(`✓ Copied 404.html for fallback routing`);
  }
}

console.log('Syncing build output to root...');
syncFiles(buildDir, rootDir);
createRouteHtmlFiles();
console.log('\n✓ Build sync complete. Root files updated for GitHub Pages deployment.');
