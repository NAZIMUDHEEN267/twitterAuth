import React, { Component } from "react";
import { View } from "react-native";
import Login from "./screens/Login/Login";
import SignUp from "./screens/SignUp/SignUp";


class App extends Component {
    render() {
        return (
            <View>
                {/* Login */}
                {/* <Login /> */}
                {/* Register */}
                <SignUp />
                {/* Home */}
            </View>
        )
    }
}

export default App;
