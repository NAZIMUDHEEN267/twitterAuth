import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./Navigator/AuthNavigator";
import userContext from "Context";
import { useState } from "react";

const App = function () {

    const [access, setAccess] = useState(false);

    const loginUser = async function (data) {
        const { Phone, Username, Email, Password  } = data;
        const storeData = await 
        if(storeData) {
            setAccess(true);
        }
    }

    const signUser = async function (data) {
        const { Username, Password } = data;
        const verifyData = await 
        if(verifyData) {
            setAccess(true);
        }

    }

    return (
       <userContext.Provider value={{login: loginUser, sign: signUser}}>
            <NavigationContainer>
                <AuthNavigator route={access ? "Home" : "Login"}/>
            </NavigationContainer>
       </userContext.Provider>
    )
}

export default App;