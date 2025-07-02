import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        gsap: "readonly",
        ScrollTrigger: "readonly",
        jQuery: "readonly",
        $: "readonly",
        define: "readonly",
        module: "readonly",
        require: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
    },
  },
  {
    files: ["js/animations.js"],
    rules: {
      "no-console": "off",
    },
  },
  {
    ignores: ["_site/**", "node_modules/**", "js/vendor/**"],
  },
];
