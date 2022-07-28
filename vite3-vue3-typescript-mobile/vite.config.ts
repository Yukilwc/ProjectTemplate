import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log("==========env", env);

  return {
    plugins: [
      vue(),
      AutoImport({
        imports: [
          "vue",
          "vue-router",
          // "@vueuse/core",
          // {
            // "@/utils/http": ["httpClient"],
            // "@/utils/tools": ["toEnquiry"]
          // },
        ],
        // resolvers: [ElementPlusResolver()],
      }),

      Components({
        dirs: ["src/unpluginComponents"],
        dts: true,
        resolvers: [VantResolver()],
      }),
    ],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
        },
      ],
    },
    server: {
      host: "0.0.0.0",
    },
  };
});
