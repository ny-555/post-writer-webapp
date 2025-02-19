import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // {
  //   files: ["next.config.js"], // next.config.js のみに適用
  //   rules: {
  //     "@typescript-eslint/no-require-imports": "off", // require() を許可
  //   },
  // },
];

export default eslintConfig;
