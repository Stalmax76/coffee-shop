import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default tseslint.config(
   { ignores: ['dist'] },
   {
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
         ecmaVersion: 2020,
         globals: globals.browser,
         parserOptions: {
            project: ['./tsconfig.app.json', './tsconfig.node.json', './tsconfig.json'],
            tsconfigRootDir: import.meta.dirname,
         },
      },
      plugins: {
         react,
         'react-hooks': reactHooks,
         'react-refresh': reactRefresh,
         prettier,
      },
      extends: [
         js.configs.recommended,
         ...tseslint.configs.recommendedTypeChecked,
         ...compat.extends('plugin:react/recommended'),
         ...compat.extends('plugin:prettier/recommended'),
      ],
      settings: {
         react: {
            version: 'detect',
            jsxRuntime: 'automatic',
         },
      },
      rules: {
         ...reactHooks.configs.recommended.rules,
         'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
         'prettier/prettier': 'warn',
         '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
         '@typescript-eslint/no-explicit-any': 'warn',
         'react/react-in-jsx-scope': 'off',
         'react/jsx-uses-react': 'off',
         'react/prop-types': 'off',
      },
   },
);
