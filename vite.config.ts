// import { defineConfig } from "vite";
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     sourcemap: true,
//   },
//   resolve: {
//     alias: {
//       components: path.resolve(__dirname, 'src/components'),
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      myRedux: path.resolve(__dirname, "src/redux"),
    },
  },
});
