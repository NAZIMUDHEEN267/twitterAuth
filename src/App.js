import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./Navigator/AuthNavigator";
import userContext from "Context"; // path ./src/Auth
import { useState } from "react";
import RNBootSplash from "react-native-bootsplash";
// for authentication check
import loginCheck from "./Auth/loginCheck";
import signCheck from "./Auth/signCheck";

const App = function () {

    const [access, setAccess] = useState(false);

    return (
       <userContext.Provider value={{
        access, 
        cb: function() { setAccess(true) },
        loginCheck,
        signCheck,
        logObj: {},
        sigObj: {}
        }}>
            <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
                <AuthNavigator route={access ? "Home" : "Login"}/>
            </NavigationContainer>
       </userContext.Provider>
    )
}

export default App;