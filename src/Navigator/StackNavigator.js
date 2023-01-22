import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import Nav from "Screens/Nav/Nav";
import Login from 'Screens/Login/Login';
import SignUp from 'Screens/SignUp/SignUp';
import { checkVisible } from '../db/AsyncConnection';
import { useState, useEffect } from 'react';

const Stack = createStackNavigator();

 function StackNavigator() {

  const [signed, setSigned] = useState(false);

  return (
    <Stack.Navigator screenOptions={{ header: Nav }} initialRouteName={ "Drawer" }>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Drawer' component={DrawerNavigator} />
      <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
    </Stack.Navigator>
  )

}

export default StackNavigator;
