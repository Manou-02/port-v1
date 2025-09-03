import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@app", replacement: path.resolve(__dirname, "src/app") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      {
        find: "@lib",
        replacement: path.resolve(__dirname, "src/lib"),
      },
      { find: "@page", replacement: path.resolve(__dirname, "src/page") },
    ],
  },
});
