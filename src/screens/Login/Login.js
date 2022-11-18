import {
    ImageBackground,
    Text, TextInput,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import React, { Component } from 'react';
import bg from "../../assets/Images/twitterBg.png";
import icon from "../../assets/Images/twitterIcon.png";
import styles from "./Login.styles";

export class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            passwd: "",
            userBorderColor: "transparent",
            passwdBorderColor: "transparent"
        }
    }

    userText(text) {
        this.setState({ username: text })
    }

    passwdText(text) {
        this.setState({ passwd: text })
    }

    render() {
        return (
            <ImageBackground style={styles.bg} source={bg} resizeMode="cover">
                <View style={styles.parent}>
                    <Image style={styles.img} source={icon} />
                    <Text style={styles.text_lg}>Twitter</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            onFocus={() => this.setState({ userBorderColor: "#2b6fe3"})}
                            onBlur={() => this.setState({userBorderColor: "transparent"})}
                            style={[styles.input, styles.mb, {borderColor: this.state.userBorderColor}]}
                            keyboardType={"default"}
                            placeholder={"Username"}
                            value={this.state.username}
                            onChangeText={this.userText.bind(this)}
                        />
                        <TextInput
                            onFocus={() => this.setState({ passwdBorderColor: "#2b6fe3"})}
                            onBlur={() => this.setState({passwdBorderColor: "transparent"})}
                            style={[styles.input, {borderColor: this.state.passwdBorderColor}]}
                            placeholder={"Password"}
                            secureTextEntry={true}
                            value={this.state.passwd}
                            onChangeText={this.passwdText.bind(this)}
                        />
                    </View>
                    <TouchableOpacity
                        style={[styles.input, styles.btn_cta]}
                        underlayColor={"#555"}
                        activeOpacity={.8}
                        onPress={() => alert("hello")}
                    >
                        <Text style={styles.btn_text}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.text_sm}>Forgot password?. Sign up for Twitter</Text>
                </View>
            </ImageBackground>
        )
    }
}

export default Login;