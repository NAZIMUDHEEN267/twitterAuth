import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "Screens/Home/Home";
import Login from "Screens/Login/Login";
import SignUp from "Screens/SignUp/SignUp";
import SideBar from "Screens/Home/SideBar";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={SideBar}>
            <Drawer.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="SignUp" component={SignUp} />
        </Drawer.Navigator>
    )
}