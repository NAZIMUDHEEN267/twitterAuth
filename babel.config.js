module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
   [
    'module-resolver',
    {
      "alias": {
        "Images": "./src/assets/Images",
        "Components": "./src/Components"
      }
    }
   ]
  ]
};
