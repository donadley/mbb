import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { resolve } from 'path'; // Import resolve to specify file paths
import { copyFileSync } from 'fs'; // Import to handle copying files

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mbb/",
  build: {
    sourcemap: true,
    assetsDir: "code",
    target: ["esnext"],
    cssMinify: true,
    lib: false
  },
  plugins: [
    VitePWA({
      strategies: "injectManifest",
      injectManifest: {
        swSrc: 'public/sw.js',
        swDest: 'dist/sw.js',
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{html,js,css,json,png}',
        ],
      },
      injectRegister: false,
      manifest: false,
      devOptions: {
        enabled: true
      }    
    }),
    {
      name: 'add-nojekyll', // Name the custom plugin
      apply: 'build', // Ensure it runs during the build
      closeBundle() {
        // Copy the .nojekyll file to the `dist` directory
        copyFileSync(resolve(__dirname, '.nojekyll'), resolve(__dirname, 'dist', '.nojekyll'));
      }
    }
  ]
})
