import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettierPkg from 'eslint-config-prettier'

const prettierConfig = prettierPkg.flatConfig ?? []

export default [
  {
    ignores: ['node_modules/', '**/*.d.ts'],
  },
  {
    // Shared TypeScript defaults
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      semi: ['error', 'never'],
    },
  },
  ...prettierConfig,
]
