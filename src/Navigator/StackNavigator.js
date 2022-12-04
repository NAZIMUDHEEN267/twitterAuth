import { createStackNavigator } from '@react-navigation/stack';
import Login from 'Screens/Login/Login';
import SignUp from 'Screens/SignUp/SignUp';
import Home from 'Screens/Home/Home';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

function StackNavigator({route}) {
  return (
    <Stack.Navigator initialRouteName={"Drawer"}>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default StackNavigator;
