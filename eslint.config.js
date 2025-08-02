import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import angular from '@angular-eslint/eslint-plugin'

  {
    files: ['**/*.js', '**/*.ts'],
    extends: [require.resolve('@eslint/js')],
    rules: {
      'semi': ['error', 'never'],
      'indent': ['error', 2],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'comma-dangle': ['error', 'never']
    }
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      '@angular-eslint': angular
    },
    rules: {
      '@typescript-eslint/semi': ['error', 'never'],
      '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' }, singleline: { delimiter: 'none' } }],
      '@typescript-eslint/indent': ['error', 2]
    }
  }
]
