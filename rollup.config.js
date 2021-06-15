import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import externalGlobals from "rollup-plugin-external-globals";
import path from "path";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: path.resolve(__dirname, "./src/index.tsx"),
  external: ["react", "lodash"],
  output: {
    dir: path.resolve(__dirname, "./dist"),
    format: "es",
    globals: {
      react: "React",
    },
    // sourcemap: true,
    // hoistTransitiveImports: false,
    // inlineDynamicImports: true,
    // interop: "esModule",
  },
  plugins: [
    nodeResolve({ browser: true }),
    resolve({
      extensions: [".ts", ".tsx", ".js", ".jsx", ".es6", ".es", ".mjs"],
      exclude: [".css"],
    }),
    babel({
      babelHelpers: "bundled",
      configFile: path.resolve(__dirname, ".babelrc"),
      extensions: [".ts", ".tsx", ".js", ".jsx", ".es6", ".es", ".mjs"],
      exclude: "node_modules/**",
    }),
    commonjs({
      include: /node_modules/,
    }),
    externalGlobals({
      "react-dom": "ReactDOM",
      react: "React",
      lodash: "lodash",
    }),
  ],
};
