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
            emoji: "\ud83c\udde7\ud83c\uddf9",
            code: "+ 975",
            isVisible: false,
            evnt: "auto"
        }
    }

    // array used for flatlist
    list = [
        { name: "sigUsername", type: "default" },
        { name: "sigEmail", type: "email-address" },
        { name: "sigPassword", type: "default" }
    ];

    // getCode is a callback function 
    getCode(item) {
        this.setState({
            emoji: item.emoji,
            code: item.phone,
            isVisible: false,
            evnt: "auto"
        })
    }

    // Overlay close/open methods
    openOverlay = () => this.setState({ isVisible: true, evnt: "none" });
    closeOverlay = () => { this.setState({ isVisible: false, evnt: "auto" }); console.log(this.state); };

    render() {
        return (
            <View style={globalStyle.bg}>

                {/* overlay for searching country code */}
                <Overlay show={this.state.isVisible} close={this.closeOverlay.bind(this)} cb={this.getCode.bind(this)} />

                {/* navbar */}
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.icon} activeOpacity={.6} onPress={() => this.props.navigation.navigate("Login")}>
                        <Icon name="arrow-left" size={30} />
                    </TouchableOpacity>
                    <Image source={Twitter} style={styles.nav_img} />
                </View>
                {/* headline text */}
                <Text style={styles.headline}>Create your account</Text>
                {/* user inputs */}
                <View style={globalStyle.parent} pointerEvents={this.state.evnt}>
                    <View style={globalStyle.inputContainer}>
                        {/* separate mobile text input for getting country code */}
                        <View style={globalStyle.search}>
                            <TouchableOpacity style={styles.code} onPress={this.openOverlay.bind(this)}>
                                <Text>{`${this.state.emoji} ${this.state.code}`}</Text>
                            </TouchableOpacity>
                            <TextInput inputName={"sigMobile"} type={"number-pad"} borderBtm={true} />
                        </View>
                        <FlatList
                            data={this.list}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item, index }) => (
                                (index === this.list.length - 1) ?
                                    <TextInput inputName={item.name} type={item.type} secure={true} /> :
                                    <TextInput inputName={item.name} type={item.type} />
                            )}
                        />
                    </View>

                    {/* sign up button */}
                    <Button title={"Sign up"} color={"#fff"} bg={"#0983ed"} switch={this.props.navigation}/>
                </View>
            </View>
        )
    }
}

export default SignUp;