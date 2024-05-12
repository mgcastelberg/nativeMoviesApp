module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv', 
      {
        envName: 'APP_ENV',
        moduleName:'@env',
        path: '.env'
      }
    ]
    // si usamos algun otro plugin como reanimated, colocarlo despues de dotenv
  ]
};
