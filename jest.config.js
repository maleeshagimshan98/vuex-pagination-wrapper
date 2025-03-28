module.exports = {
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx', 'json', 'vue'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for TypeScript files
    '^.+\\.jsx?$': 'babel-jest', // Use babel-jest for JavaScript files
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/node_modules/$1',
  },
  testMatch: ['<rootDir>/test/**/*.test.(ts|js)'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  // Add other Jest configuration options as needed
};