import path from "path";

import {
  defineConfig,
  loadEnv,
  type AliasOptions,
  type UserConfig,
} from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const root = path.resolve(__dirname, "src");

export default ({ mode }: { mode: string }): UserConfig => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": root,
      } as AliasOptions,
    },
    server: {
      port: parseInt(process.env.VITE_PORT || "3000"),
      strictPort: true,
    },
    preview: {
      port: parseInt(process.env.VITE_PORT || "3000"),
    },
  });
};


