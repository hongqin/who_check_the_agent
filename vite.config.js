export default {
  optimizeDeps: { exclude: ['monaco-editor'] },
  // lightningcss (Vite's default minifier) rejects a rule in Slidev 52's own CSS
  build: { cssMinify: false },
};
