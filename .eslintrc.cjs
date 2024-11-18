module.exports = {
  // Other configuration rules...
  parserOptions: {
    ecmaVersion: 'latest', // Enables latest ECMAScript features
    sourceType: 'module',  // Allows use of ES Modules
    project: ['./tsconfig.json', './tsconfig.node.json'], // TypeScript project files
    tsconfigRootDir: __dirname, // Ensures paths are relative to config location
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript rules
  ],
  rules: {
    // Add any custom rules here
  },
};
