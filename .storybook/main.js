const { mergeConfig } = require("vite");
const vue = require("@vitejs/plugin-vue");
const path = require("path");
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],

  framework: {
    name: "@storybook/vue3-vite",
    options: {
      docgen: {
        plugin: "vue-component-meta",
      },
    },
  },

  docs: {
    autodocs: true,
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [tailwind(), autoprefixer()],
        },
      },
      plugins: [vue()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../"),
          "~": path.resolve(__dirname, "../"),
        },
      },
    });
  },
};
export default config;
