import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.input, styles.btn_cta]}
                underlayColor={"#555"}
                activeOpacity={.8}
                onPress={() => alert("hello")}
            >
                <Text style={styles.btn_text}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export default Button;

const styles = StyleSheet.create({
    input: {
        width: "100%",
        padding: 16,
        backgroundColor: "#fff",
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
        fontWeight: "600",
        fontSize: 15,
        color: "#0983ed"
    },
})