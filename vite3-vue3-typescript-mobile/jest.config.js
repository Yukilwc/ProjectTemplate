module.exports = {
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node", "vue"],
    transform: {
        "^.+\\.vue$": "vue-jest",
        "^.+\\.ts$": "ts-jest",
        "^.+\\.js$": "babel-jest",
        "^.+\\.[jt]sx?$": "babel-jest",
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': "jest-transform-stub"
    },
    transformIgnorePatterns: ['/node_modules/'],
    // support the same @ -> src alias mapping in source code
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    snapshotSerializers: ['jest-serializer-vue'],
    testEnvironment: 'jsdom',
    globals: {},

}