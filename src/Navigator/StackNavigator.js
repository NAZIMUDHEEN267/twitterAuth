import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import TopNavigator from './TopNavigator';
import Nav from "Screens/Nav/Nav";

const Stack = createStackNavigator();

function StackNavigator({route}) {
  return (
    <Stack.Navigator screenOptions={{header: Nav}}>
      <Stack.Screen name="Tab" component={TopNavigator}/>
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  )
}

export default StackNavigator;
