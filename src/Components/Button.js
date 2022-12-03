import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import userContext from 'Context';

export class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "#c4c7cc"
        }
    }

    // context api
    static contextType = userContext;

    // event handling
    handleEvent = (e) => {
        console.log(this.context.logObj, this.context.logBtn);
        if(this.context.logBtn) {
            console.log(this.context.loginCheck(this.context.logObj));
        } else if(this.context.sigBtn) {
            this.context.sigCheck(this.context.sigObj);
        }
        e.preventDefault();
    }

    render() {
        return (
            <TouchableOpacity
                ref={this.inputRef}
                style={[styles.input, styles.btn_cta, { backgroundColor: this.state.color }]}
                underlayColor={"#555"}
                activeOpacity={.8}
                onPress={this.handleEvent}
            >
                <Text style={[styles.btn_text, { color: this.props.color }]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export default Button;

const styles = StyleSheet.create({
    input: {
        width: "100%",
        padding: 16,
        color: "#000",
        borderRadius: 22,
        borderWidth: 2,
        borderColor: "transparent"
    },
    btn_cta: {
        width: "80%"
    },
    btn_text: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 15,
    },
})