module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts}'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  },

  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '\\.ts$': 'ts-jest'
  }
}
