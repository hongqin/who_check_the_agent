#!/usr/bin/env node
// Wrapper script to load localStorage polyfill before running slidev

const { spawn } = require('child_process');
const path = require('path');

// Get the absolute path to the polyfill
const polyfillPath = path.resolve(__dirname, 'setup-localstorage.cjs');

// Set NODE_OPTIONS to require the polyfill in child processes
const env = {
  ...process.env,
  NODE_OPTIONS: (process.env.NODE_OPTIONS || '') + ` --require ${polyfillPath}`
};

// Get the slidev binary path
const slidevBin = path.join(__dirname, 'node_modules', '.bin', 'slidev');

// Get all arguments except the script name
const args = process.argv.slice(2);

// Spawn slidev with all arguments
const child = spawn(slidevBin, args, {
  stdio: 'inherit',
  env: env,
  shell: false
});

child.on('exit', (code) => {
  process.exit(code || 0);
});
