import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigator from "./Navigator/AuthNavigator";

const App = function () {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    )
}

export default App;