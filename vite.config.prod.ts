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
      registerType: 'autoUpdate', // Automatically updates the service worker
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg}'], // Cache these file types
      },
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
      manifest: {
        id: "/",
        scope: "/",
        name: "mbb",
        display: "standalone",
        start_url: "/mbb",
        short_name: "starter",
        theme_color: "#E1477E",
        description: "This is a mbb app",
        orientation: "any",
        background_color: "#E1477E",
        related_applications: [],
        prefer_related_applications: false,
        display_override: ["window-controls-overlay"],
        launch_handler: {
          client_mode: "focus-existing"
        },
        icons: [
          {
            src: "assets/icons/512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "assets/icons/192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "assets/icons/48x48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "assets/icons/24x24.png",
            sizes: "24x24",
            type: "image/png"
          }
        ],
        screenshots: [
          {
            src: "assets/screenshots/screen.png",
            sizes: "1617x1012",
            type: "image/png"
          }
        ],
        features: [
          "Cross Platform",
          "fast",
          "simple"
        ],
        categories: [
          "social"
        ],
        shortcuts: [
          {
            name: "Open About",
            short_name: "About",
            description: "Open the about page",
            url: "/about",
            icons: [{ "src": "assets/icons/192x192.png", "sizes": "192x192" }]
          }
        ],
        widgets: [
          {
            name: "Starter Widget",
            tag: "starterWidget",
            ms_ac_template: "widget/ac.json",
            data: "widget/data.json",
            description: "A simple widget example from pwa-starter.",
            screenshots: [
              {
                src: "assets/screenshots/widget-screen.png",
                sizes: "500x500",
                label: "Widget screenshot"
              }
            ],
            icons: [
              {
                src: "assets/icons/48x48.png",
                sizes: "48x48"
              }
            ]
          }
        ]
      }
      ,
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
