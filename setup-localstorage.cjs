// Polyfill localStorage for Node.js environment
// This file must be CommonJS to be loaded with --require flag
const { LocalStorage } = require('node-localstorage');
const path = require('path');
const os = require('os');

// Create a temporary directory for localStorage
const storageDir = path.join(os.tmpdir(), 'slidev-localstorage');

// Initialize localStorage on global and globalThis
if (typeof global !== 'undefined') {
  global.localStorage = new LocalStorage(storageDir);
}

if (typeof globalThis !== 'undefined') {
  globalThis.localStorage = global.localStorage || new LocalStorage(storageDir);
}

// Also ensure window.localStorage exists (for browser-like environments)
if (typeof window !== 'undefined') {
  window.localStorage = global.localStorage || new LocalStorage(storageDir);
}
