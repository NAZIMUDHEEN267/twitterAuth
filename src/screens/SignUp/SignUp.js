import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import TextInput from 'Components/TextInput';
import Button from 'Components/Button';
import Twitter from "Images/twitter.png";
import Icon from "react-native-vector-icons/Feather";
import styles from "./SignUp.styles";
import globalStyle from "../Global.styles";
import Overlay from './Overlay';

export class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emoji: "\ud83c\uddee\ud83c\uddf3",
            code: "+91",
            isVisible: false
        }
    }

    // array used for flatlist
    list = [
        { name: "sigUsername", type: "default" },
        { name: "sigEmail", type: "email-address" },
        { name: "sigPassword", type: "default" }
    ];

    // getCode is a callback function 
    getCode (item) {
        this.setState({
            code: item.phone,
            emoji: item.emoji,
            isVisible: true
        })
    }

    // Overlay close/open methods
    openOverlay = () => this.setState({ isVisible: true });
    closeOverlay = () => this.setState({ isVisible: false });

    render() {
        return (
            <View style={globalStyle.bg}>

            {/* overlay for searching country code */}
            <Overlay show={this.state.isVisible} close={this.closeOverlay} cb={this.getCode}/>

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
                        <View style={globalStyle.search}>
                            <TouchableOpacity style={styles.code} onPress={this.openOverlay}>
                                <Text>{`${this.state.emoji} ${this.state.code}`}</Text>
                            </TouchableOpacity>
                            <TextInput inputName={"sigMobile"} type={"number-pad"} borderBtm={true} />
                        </View>
                        {/* <FlatList
                            data={this.list}
                            pointerEvents={"box-none"}
                            // style={globalStyle.inputContainer}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item, index }) => (
                                (index === this.list.length - 1) ?
                                    <TextInput inputName={item.name} type={item.type} secure={true} /> :
                                    <TextInput inputName={item.name} type={item.type} />
                            )}
                        /> */}
                    </View>

                </View>
                {/* sign up button */}
                <Button title={"Sign up"} color={"#fff"} bg={"#0983ed"} />
            </View>
        )
    }
}

export default SignUp;