import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "Screens/Drawer/Profile";
import Topics from "Screens/Drawer/Topics";
import Bookmarks from "Screens/Drawer/Bookmarks";
import Lists from "Screens/Drawer/Lists";
import TwitterCircle from "Screens/Drawer/TwitterCircle";
import Home from "Screens/Home/Home";
import SideBar from "Screens/Home/SideBar";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={SideBar}>
            <Drawer.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Topics" component={Topics} />
            <Drawer.Screen name="Bookmarks" component={Bookmarks} />
            <Drawer.Screen name="Lists" component={Lists} />
            <Drawer.Screen name="TwitterCircle" component={TwitterCircle} />
        </Drawer.Navigator>
    )
}