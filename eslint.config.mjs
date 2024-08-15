import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],ignores: ["webpack.config.js"]},
  // {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];



// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
// export default [
//     {files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
//     { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
//     {languageOptions: { globals: globals.browser }},
//     pluginJs.configs.recommended,
//     ...tseslint.configs.recommended,
//     pluginReactConfig,
//     {settings: { react: { version: "detect" } }}
// ];