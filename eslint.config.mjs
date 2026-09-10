import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  { ignores: [".next/**", "node_modules/**", "out/**", "next-env.d.ts"] },
  {
    // `no-head-element` is a Pages Router rule. In the App Router a root layout
    // is exactly where <head> belongs, so it is a false positive here.
    files: ["src/app/**/layout.tsx", "src/components/layout/RootHtml.tsx"],
    rules: {
      "@next/next/no-head-element": "off",
      // Also a Pages Router rule. Its warning is that the font "will only load
      // for a single page" — which is precisely the intent here: the Japanese
      // face must not be requested by the English route.
      "@next/next/no-page-custom-font": "off",
    },
  },
];

export default eslintConfig;
