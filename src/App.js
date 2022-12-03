import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import AuthNavigator from "./Navigator/AuthNavigator";
import userContext from "Context"; // path ./src/Auth
import { useState } from "react";
import RNBootSplash from "react-native-bootsplash";

const App = function () {

    const [access, setAccess] = useState(false);

    return (
       <userContext.Provider value={"kas"}>
            <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
                <AuthNavigator route={access ? "Home" : "Login"}/>
            </NavigationContainer>
       </userContext.Provider>
    )
}

export default App;