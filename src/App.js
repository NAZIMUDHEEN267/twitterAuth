import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import AuthNavigator from "./Navigator/AuthNavigator";
import userContext from "Context"; // path ./src/Auth
import { useState } from "react";

const App = function () {

    const [access, setAccess] = useState(true);


    async function signUser (data) {
        const storeData = await AsyncStorage.setItem("user", JSON.stringify(data));
        if (storeData) {
            setAccess(true);
            return true;
        }

        return null;
    }
    

    return (
       <userContext.Provider value={"kas"}>
            <NavigationContainer>
                <AuthNavigator route={access ? "Home" : "Login"}/>
            </NavigationContainer>
       </userContext.Provider>
    )
}

export default App;