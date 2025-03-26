// ES Module syntax - with .mjs extension
import { execSync } from 'child_process';

console.log('Starting custom Netlify build script...');

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

// Create explicit reference to main.tsx to prevent Rollup errors
console.log('Creating module references...');
execSync('echo "// External module reference" > src/main.tsx.ref');

// Run the build
console.log('Running build...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Build completed successfully!'); 