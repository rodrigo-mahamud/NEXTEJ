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
   {
      rules: {
         // Cambia el nivel de "error" a "warn" para variables no utilizadas
         "@typescript-eslint/no-unused-vars": "warn",
         // También añadimos la regla para imports no utilizados
         "unused-imports/no-unused-imports": "warn",
         "unused-imports/no-unused-vars": [
            "warn",
            {
               vars: "all",
               varsIgnorePattern: "^_",
               args: "after-used",
               argsIgnorePattern: "^_",
            },
         ],
      },
   },
];

export default eslintConfig;
