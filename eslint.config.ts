import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default tsEslint.config(eslint.configs.recommended, tsEslint.configs.recommended, eslintPluginPrettier);
