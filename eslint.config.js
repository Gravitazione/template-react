import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier';
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier/recommended'
import storybook from 'eslint-plugin-storybook'

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'public'] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintConfigPrettier,
      react.configs.flat.recommended,
      importPlugin.flatConfigs.recommended,
      jsxA11y.flatConfigs.recommended,
      prettier,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-unused-vars': 'error',
      'import/no-dynamic-require': 'warn',
      'import/no-nodejs-modules': 'warn',
      'no-console': 'warn',
      'react/button-has-type': 'error',
      'react/react-in-jsx-scope': ['off'],
      camelcase: 'error',
      'spaced-comment': 'error',
      quotes: ['error', 'single'],
      'no-duplicate-imports': 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'import/no-extraneous-dependencies': [
        'off',
        {
          devDependencies: false,
          optionalDependencies: false,
          peerDependencies: false,
        },
      ],
      '@typescript-eslint/no-unused-vars': ['error'],
      'react/jsx-fragments': ['error', 'element']
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json'
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      },
    }
  },
  {
    files: ['**/*.stories.{ts,tsx}', '**/*.story.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettier,
      ...storybook.configs['flat/recommended']
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      ...storybook.configs.recommended.rules,
    }
  }
)
