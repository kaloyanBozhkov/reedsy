module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/server/$1',
    '^common/(.*)$': '<rootDir>/src/common/$1',
  },
}
