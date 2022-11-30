import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import AuthNavigator from "./Navigator/AuthNavigator";
import "react-native-gesture-handler";

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <AuthNavigator />
            </NavigationContainer>
        )
    }
}

export default App;
