/** 
 * File: eslint.config.mjs
 * Author: Yash Balotiya
 * Description: ESLint configuration file
 * Created on: 19/08/2025
 * Last Modified: 19/08/2025
*/

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
];

export default eslintConfig;
