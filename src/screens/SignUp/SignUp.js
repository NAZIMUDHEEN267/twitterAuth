import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import TextInput from 'Components/TextInput';
import Button from 'Components/Button';
import Twitter from "Images/twitter.png";
import Icon from "react-native-vector-icons/Feather";
import styles from "./SignUp.styles";
import globalStyle from "../Global.styles";
export class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emoji: "\ud83c\uddee\ud83c\uddf3",
            code: "+91",
            search: "",
            isVisible: false
        }
    }

    // array used for flatlist
    list = [
        { name: "sigUsername", type: "default" },
        { name: "sigEmail", type: "email-address" },
        { name: "sigPassword", type: "default" }
    ];

    render() {
        return (
            <View style={globalStyle.bg}>
                {/* navbar */}
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.icon} activeOpacity={.6}>
                        <Icon name="arrow-left" size={30} />
                    </TouchableOpacity>
                    <Image source={Twitter} style={styles.nav_img} />
                </View>
                {/* headline text */}
                <Text style={styles.headline}>Create your account</Text>
                {/* user inputs */}
                <View style={globalStyle.parent}>
                    <View style={globalStyle.inputContainer}>
                        {/* separate mobile text input for getting country code */}
                        <View style={styles.mobile}>
                            <TouchableOpacity style={styles.code}>
                                <Text>{`${this.state.emoji} ${this.state.code}`}</Text>
                            </TouchableOpacity>
                            <TextInput inputName={"sigMobile"} type={"number-pad"} borderBtm={true}/>
                        </View>
                        <FlatList
                            data={this.list}
                            // style={globalStyle.inputContainer}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item, index }) => (
                                (index === this.list.length - 1) ?
                                    <TextInput inputName={item.name} type={item.type} secure={true} /> :
                                    <TextInput inputName={item.name} type={item.type} />
                            )}
                        />
                    </View>

                </View>
                {/* sign up button */}
                <Button title={"Sign up"} color={"#fff"} bg={"#0983ed"} />
            </View>
        )
    }
}

export default SignUp;