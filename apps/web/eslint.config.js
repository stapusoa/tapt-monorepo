import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import regexpPlugin from 'eslint-plugin-regexp'
import storybookPlugin from 'eslint-plugin-storybook'

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: process.cwd(),
        ecmaFeatures: { jsx: true },
      },
      globals: { window: 'readonly', document: 'readonly' },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      'jsx-a11y': jsxA11yPlugin,
      regexp: regexpPlugin,
      storybook: storybookPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/restrict-template-expressions': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'jsx-a11y/anchor-has-content': 'error',
      'regexp/no-dupe-characters-character-class': 'error',
      'regexp/strict': 'error',
    },
    settings: { react: { version: 'detect' } },
  },
]
