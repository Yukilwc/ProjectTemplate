import { defineConfig, loadEnv } from "vite";
import pxtorem from "postcss-pxtorem";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import autoprefixer from "autoprefixer";
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log("==========env", mode,env);

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
      visualizer()
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
          autoprefixer(),
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
      preprocessorOptions: {
        scss: {
          additionalData: `@use '@/style/tools.scss' as *;`, // 添加公共样式
          // charset: false,
        },
        // css: { charset: false }, // 解决 warning: "@charset" must be the first rule in the file
      },
    },
    esbuild: {
      drop: mode === "production" ? ["console", "debugger"] : [],
    },
  };
});
