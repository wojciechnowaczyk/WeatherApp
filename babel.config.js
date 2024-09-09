module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    'jest-hoist',
    ['@babel/plugin-transform-runtime', { 'regenerator': true }]
  ],
};
