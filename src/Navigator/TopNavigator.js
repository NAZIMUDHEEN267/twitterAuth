import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Main from "Screens/Home/Main/Main";
import Robotics from "Screens/Home/Robotics/Robotics";
import Tech from "Screens/Home/Tech/Tech";
import History from "Screens/Home/History/History";

const Tab = createMaterialTopTabNavigator();

export default function TopNavigator() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="Robotics" component={Robotics} />
            <Tab.Screen name="Tech" component={Tech} />
            <Tab.Screen name="History" component={History}/>
        </Tab.Navigator>
    )
}