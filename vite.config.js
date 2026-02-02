import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

const TEMPLATE_ID = "id_template";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "static/manifest.xml",
          dest: TEMPLATE_ID,
        },
        {
          src: "static/vite.svg",
          dest: TEMPLATE_ID,
        },
      ],
    }),
  ],
  build: {
    outDir: "dist",
    assetsDir: `${TEMPLATE_ID}/assets`,
    rollupOptions: {
      output: {
        entryFileNames: `${TEMPLATE_ID}/assets/[name].[hash].js`,
        chunkFileNames: `${TEMPLATE_ID}/assets/[name].[hash].js`,
        assetFileNames: `${TEMPLATE_ID}/assets/[name].[hash][extname]`,
      },
    },
  },
});
