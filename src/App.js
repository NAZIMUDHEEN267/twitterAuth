import { NavigationContainer } from "@react-navigation/native";
import userContext from "Auth/context"; // path ./src/Auth
import { useState } from "react";
import RNBootSplash from "react-native-bootsplash";
import StackNavigator from "./Navigator/StackNavigator"

const App = function (props) {

    const [access, setAccess] = useState(false);

    return (
        <userContext.Provider value={{ 
           access, setAccess
            }} >
            <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
                <StackNavigator />
            </NavigationContainer>
        </userContext.Provider>
    )
}

export default App;

