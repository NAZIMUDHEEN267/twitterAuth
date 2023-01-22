import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import userContext from 'Auth/context';

export class Button extends Component {
    constructor(props) {
        super(props);
    }

    confirmUser(e, valuation) {
        if(!valuation) {
            e.preventDefault();
        } else {
            this.props.switch("Tab");
        }
    }

    render() {
        return (
            <userContext.Consumer>
                {
                    (value) => (
                        <TouchableOpacity
                            style={[styles.input, styles.btn_cta, { backgroundColor: this.props.bg }]}
                            underlayColor={"#555"}
                            activeOpacity={.8}
                            onPress={(e) => this.confirmUser(e, value.access)}
                        >
                            <Text style={[styles.btn_text, { color: this.props.color }]}>{this.props.title}</Text>
                        </TouchableOpacity>
                    )
                }
            </userContext.Consumer>
        )
    }
}

Button.contextType = userContext;

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