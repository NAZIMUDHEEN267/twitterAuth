import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import TopNavigator from './TopNavigator';
import Nav from "Screens/Nav/Nav";
import Login from 'Screens/Login/Login';
import SignUp from 'Screens/SignUp/SignUp';
import Main from 'Screens/Home/Main/Main';

const Stack = createStackNavigator();

function StackNavigator({route}) {
  return (
    <Stack.Navigator screenOptions={{header: Nav}}>
      <Stack.Screen name='Login' component={Login}  options={{headerShown: false}}/>
      <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="Tab" component={TopNavigator}/>
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  )
}

export default StackNavigator;
