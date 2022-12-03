import {
    ImageBackground,
    Text,
    View,
    Image,
} from 'react-native';
import React, { Component } from 'react';
import bg from "Images/twitterBg.png";
import icon from "Images/twitterIcon.png";
import Button from "Components/Button";
import TextInput from 'Components/TextInput';
import styles from "./Login.styles";
import globalStyle from '../Global.styles';
import PropTypes from "prop-types";
import { TouchableOpacity } from 'react-native-gesture-handler';

export class Login extends Component {

    constructor(props) {
        super(props);
    }

    // rendering method
    render() {

        return (
            <ImageBackground style={globalStyle.bg} source={bg} resizeMode="cover">

                <View style={globalStyle.parent}>
                    {/* twitter icon */}
                    <Image style={styles.img} source={icon} />
                    {/* twitter font */}
                    <Text style={styles.text_lg}>Twitter</Text>
                    {/* user inputs */}
                    <View style={globalStyle.inputContainer}>
                        <TextInput inputName={"logUsername"} />
                        <TextInput inputName={"logPassword"} secure={true} />
                    </View>
                    {/* call to action button */}
                    <Button title={"Login"} bg={"#fff"} color={"#0983ed"} switch={this.props.navigation} />
                    {/* links forgot and new register */}
                    <View style={{flexDirection: "row", justifyContent: "center"}}>
                        <Text style={styles.text_sm}>Forgot password?. </Text>
                        <TouchableOpacity>
                            <Text style={styles.text_sm} onPress={() => this.props.navigation.navigate("SignUp")}>Sign up for Twitter</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
        )
    }
}

// props type checking
Login.propTypes = { navigation: PropTypes.object };

export default Login;