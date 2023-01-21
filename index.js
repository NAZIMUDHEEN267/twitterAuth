/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/App';
import SignUp from 'Screens/SignUp/SignUp';
import {name as appName} from './app.json';
import "react-native-gesture-handler";

AppRegistry.registerComponent(appName, () => SignUp);
