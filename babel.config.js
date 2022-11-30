module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ["module:react-native-dotenv", {
        "moduleName": "react-native-dotenv"
      }],
      ['module-resolver',
        {
          "alias": {
            "Images": "./src/assets/Images",
            "Components": "./src/Components",
            "Screens": "./src/screens"
          }
        }]
    ]
  };