const jsConfig = require('@eslint/js')
const tseslint = require('@typescript-eslint/eslint-plugin')
const tsParser = require('@typescript-eslint/parser')
const angular = require('@angular-eslint/eslint-plugin')

module.exports = [
  {
    ...jsConfig.configs.recommended,
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        setTimeout: 'readonly',
        console: 'readonly',
        ...jsConfig.configs.recommended.languageOptions?.globals
      }
    },
    rules: {
      ...jsConfig.configs.recommended.rules,
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
        project: ['./tsconfig.app.json', './tsconfig.spec.json'],
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      '@angular-eslint': angular
    },
    rules: {
      'semi': ['error', 'never'],
      'indent': ['error', 2]
    }
  },
  {
    files: ['src/**/*.spec.ts'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        expect: 'readonly',
        window: 'readonly',
        document: 'readonly',
        setTimeout: 'readonly',
      }
    }
  },
  {
    files: ['src/main.ts'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
      }
    }
  }
]
