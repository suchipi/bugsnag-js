import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import json from "rollup-plugin-json";
import babel from "rollup-plugin-babel";

export default {
  plugins: [
    babel({
      include: "**/*"
    }),
    nodeResolve(),
    commonjs(),
    json()
  ],
  output: {
    format: "cjs"
  }
};
