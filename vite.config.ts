import { fileURLToPath, URL } from "url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default ({ command, mode }: { command: string; mode: string }) => {
  console.log({ mode, command });
  const env = loadEnv(mode, process.cwd());
  process.env = { ...process.env, ...env };

  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  const plugins =
    mode === "development" ? [vue(), vueJsx()] : [vue(), vueJsx()];

  return defineConfig({
    plugins,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
};
