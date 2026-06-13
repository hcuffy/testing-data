module.exports = {
    testEnvironment:         'node',
    transform:               { '.(ts|tsx)': 'ts-jest' },
    testRegex:               '(/__tests__/.*|(\\.|/)test)\\.(js?|ts?)$',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    testPathIgnorePatterns:  ['<rootDir>/node_modules/'],
    moduleFileExtensions:    ['ts', 'tsx', 'js', 'json'],
    collectCoverageFrom:     ['<rootDir>/src/**/**', '!<rootDir>/src/**/*.d.ts', '!<rootDir>/src/**/index.ts'],
    coverageThreshold:       { global: { branches:   80,
        functions:  80,
        statements: 80,
        lines:      80 } }
};
