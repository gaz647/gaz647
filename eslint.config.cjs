// eslint.config.cjs
const { defineConfig, globalIgnores } = require('eslint/config');
const js = require('@eslint/js');
const globals = require('globals');

const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');

// bezpečně vytáhneme doporučená TS pravidla
const tsRecommendedRules =
    (tsPlugin.configs &&
        tsPlugin.configs.recommended &&
        tsPlugin.configs.recommended.rules) ||
    {};

module.exports = defineConfig([
    // náhrada za .eslintignore
    globalIgnores(['**/dist',  'node_modules']),

    // Základní doporučení pro JS
    js.configs.recommended,

    // TypeScript: parser + plugin + doporučená pravidla (bez extends)
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: { ecmaFeatures: { jsx: true } },
            globals: { ...globals.browser },
        },
        plugins: { '@typescript-eslint': tsPlugin },
        rules: {
            ...tsRecommendedRules,
        },
    },

    // Společná pravidla pro JS/TS + React Hooks & React Refresh
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: { ecmaFeatures: { jsx: true } },
            globals: { ...globals.browser },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        },
    },
]);
