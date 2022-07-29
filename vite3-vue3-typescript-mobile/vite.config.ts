import { defineConfig, loadEnv } from "vite";
import pxtorem from "postcss-pxtorem";
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
    css: {
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 37.5,
            // unitPrecision: 2,
            propList: ["*"],
            // propList: ["font", "font-size", "line-height", "letter-spacing"],
            selectorBlackList: [],
            replace: true,
            mediaQuery: true,
            minPixelValue: 2,
            exclude: function (file) {
              if (file.indexOf("node_modules") !== -1) {
                if (file.indexOf("vant") !== -1) {
                  return false;
                } else {
                  return true;
                }
              } else return false;
            },
            // exclude: /node_modules/i,
            // exclude: /^((?!mobile).)+$|(node_modules)/gi,
          }),
        ],
      },
    },
  };
});
