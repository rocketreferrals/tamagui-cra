const { shouldExclude } = require("tamagui-loader");
const webpack = require("webpack");

const tamaguiOptions = {
  config: "./tamagui.config.ts",
  components: ["tamagui"],
  importsWhitelist: ["constants.js", "colors.js"],
  logTimings: true,
  disableExtraction: process.env.NODE_ENV === "development",
};

const projectRoot = __dirname;

module.exports = {
  webpack: {
    alias: {
      // Resolve react-native to react-native-web
      "react-native$": require.resolve("react-native-web"),

      // Experimentally opt into react-native-web-lite which drops support for all react-native
      // built-in List components, and removes many deprecated APIs and code-reduction, slimming
      // bundle sizes down nearly 30-50Kb.
      // "react-native$": "react-native-web-lite",
      // "react-native-web$": "react-native-web-lite",

      // optional, for lighter svg icons on web
      // "react-native-svg": require.resolve("@tamagui/react-native-svg"),
    },
    plugins: {
      add: [
        new webpack.DefinePlugin({
          "process.env.TAMAGUI_TARGET": '"web"',
        }),
      ],
    },
    configure: {
      module: {
        rules: [
          {
            test: /\.m?js$/,
            resolve: {
              fullySpecified: false,
            },
          },
          {
            test: /\.[jt]sx?$/,
            // you'll likely want to adjust this helper function,
            // but it serves as a decent start that you can copy/paste from
            exclude: (path) => shouldExclude(path, projectRoot, tamaguiOptions),
            use: [
              // optionally thread-loader for significantly faster compile!
              // "thread-loader",

              // works nicely alongside esbuild
              {
                loader: "esbuild-loader",
              },

              {
                loader: "tamagui-loader",
                options: tamaguiOptions,
              },
            ],
          },
        ],
      },
    },
  },
};
