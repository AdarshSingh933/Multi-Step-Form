module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./src/utils/validation.test.js'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(module-to-ignore|other-module))'
  ],
};
