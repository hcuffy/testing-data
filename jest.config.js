module.exports = {
    testEnvironment         : 'node',
    transform               : { '.(ts|tsx)': 'ts-jest' },
    testRegex               :  "(/__tests__/.*|(\\.|/)test)\\.(js?|ts?)$",
    transformIgnorePatterns : ['<rootDir>/node_modules/'],
    testPathIgnorePatterns  : ['<rootDir>/node_modules/'],
    moduleFileExtensions    : ['ts', 'tsx', 'js','json'],
    collectCoverageFrom     : ['<rootDir>/src/**/**', '!<rootDir>/src/**/*.d.ts', '!<rootDir>/src/**/index.ts'],
    coverageThreshold       : { global: {
        branches  : 1,
        functions : 1,
        statements: 1,
             lines: 1
    } }
};
