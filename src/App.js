import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import userContext from "Context"; // path ./src/Auth
import { useState } from "react";
import RNBootSplash from "react-native-bootsplash";
import StackNavigator from "./Navigator/StackNavigator"

const App = function () {

    const [access, setAccess] = useState(false);

    return (
       <userContext.Provider value={"kas"}>
            <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
                <StackNavigator />
            </NavigationContainer>
       </userContext.Provider>
    )
}

export default App;