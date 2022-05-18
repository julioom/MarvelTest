module.exports = {
    verbose: true,
    preset: 'react-native',
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
    ],
    modulePaths: ['node_modules'],
    modulePathIgnorePatterns: ['<rootDir>/ios/build'],
    setupFiles: ['<rootDir>/jest.setup.js', './node_modules/react-native-gesture-handler/jestSetup.js'],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    transformIgnorePatterns: ["/node_modules/(?!(@react-native|react-native|@fortawesome)).*/"],
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
    }
};