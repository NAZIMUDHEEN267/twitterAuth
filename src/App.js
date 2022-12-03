import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./Navigator/AuthNavigator";
import userContext from "Context"; // path ./src/Auth
import { useState } from "react";
import RNBootSplash from "react-native-bootsplash";
// for authentication check


const App = function () {

    const [access, setAccess] = useState(false);
    const [logBtn, setLogBtn] = useState(false);
    const [sigBtn, setSigBtn] = useState(false);
    const [logObj, setLogObj] = useState({});
    const [sigObj, setSigObj] = useState({username: "", password: ""});

    function logObjCb (uname, passwd) {
        setLogObj({ username: uname, password: passwd })
    }

    return (
        <userContext.Provider value={{
            logBtn,
            sigBtn,
            logCb: function (value) { setLogBtn(value) },
            sigCb: function (value) { setSigBtn(value) },
            logObjCb ,
            sigObjCb: function (value) { setSigObj({...value}) },
            sigObj,
            logObj
        }}>
            <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
                <AuthNavigator route={access ? "Home" : "Login"} />
            </NavigationContainer>
        </userContext.Provider>
    )
}

export default App;