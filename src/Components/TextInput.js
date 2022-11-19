import { StyleSheet, TextInput } from 'react-native';
import React, { Component } from 'react';

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logUsername: "",
      logPassword: "",
      sigUsername: "",
      sigPassword: "",
      sigMobile: "",
      sigEmail: "",
      logUserBorderClr: "#999",
      logPasswordBorderClr: "#999",
      sigUsernameBorderClr: "#999",
      sigPasswordBorderClr: "#999",
      sigMobileBorderClr: "#999",
      sigEmailBorderClr: "#999",
    }
  }

  borderClr = `${this.props.inputName}BorderClr`;

  componentDidUpdate() {
    if(/\s/g.test(this.state.logUsername || this.state.sigUsername)) {
      alert("Spaces are not allowed in Username")
    }
  }

  render() {
      return (
        <TextInput
          onFocus={() => this.setState({ [this.borderClr]: "#276ec4" })}
          onBlur={() => this.setState({ [this.borderClr]: "#999" })}
          style={[styles.input, styles.mb, { borderColor: this.state[this.borderClr] }]}
          keyboardType={"default"}
          autoFocus={this.props.inputName === "logUsername" ? true : false}
          placeholder={this.props.inputName.slice(3)}
          value={this.state[this.props.inputName]}
          onChangeText={(text) => this.setState({ [this.props.inputName]: text })}
          keyboardType={this.props.type}
          secureTextEntry={this.props.secure ? true : false}
        />
      )
    }
}

export default Input;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#999"
  },
  mb: {
    marginBottom: 14,
  },
});