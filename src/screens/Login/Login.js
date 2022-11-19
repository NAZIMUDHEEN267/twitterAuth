import {
    ImageBackground,
    Text,
    View,
    Image
} from 'react-native';
import React, { Component } from 'react';
import bg from "Images/twitterBg.png";
import icon from "Images/twitterIcon.png";
import styles from "./Login.styles";
import Button from "Components/Button";
import TextInput from 'Components/TextInput';

export class Login extends Component {
    // rendering method
    render() {
        return (
            <ImageBackground style={styles.bg} source={bg} resizeMode="cover">

                <View style={styles.parent}>
                    {/* twitter icon */}
                    <Image style={styles.img} source={icon} />
                    {/* twitter font */}
                    <Text style={styles.text_lg}>Twitter</Text>
                    {/* user inputs */}
                    <View style={styles.inputContainer}>
                        <TextInput inputName={"logUsername"}/>
                        <TextInput inputName={"logPassword"} />
                    </View>
                    {/* call to action button */}
                    <Button title={"Login"}/>
                    {/* links forgot and new register */}
                    <Text style={styles.text_sm}>Forgot password?. Sign up for Twitter</Text>
                </View>

            </ImageBackground>
        )
    }
}

export default Login;