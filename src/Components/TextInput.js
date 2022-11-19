import { StyleSheet, TextInput } from 'react-native';
import React, { Component } from 'react';

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logUsername: "",
      logPassword: "",
      logUserBorderClr: "transparent",
      logPasswordBorderClr: "transparent"
    }

    this.inputRef = React.createRef();
  }

  borderClr = `${this.props.inputName}BorderClr`;

  componentDidUpdate() {
    if(/\s/g.test(this.state.logUsername)) {
      alert("Spaces are not allowed in Username")
    }
  }

  render() {
    return (
      <TextInput ref={this.inputRef}
        onFocus={() => this.setState({ [this.borderClr]: "#276ec4"})}
        onBlur={() => this.setState({ [this.borderClr]: "transparent" })}
        style={[styles.input, styles.mb, { borderColor: this.state[this.borderClr]}]}
        keyboardType={"default"}
        autoFocus={this.props.inputName === "logUsername" ? true : false}
        placeholder={this.props.inputName.slice(3)}
        value={this.state[this.props.inputName]}
        onChangeText={(text) => this.setState({ [this.props.inputName]: text })}
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
    color: "#555",
    borderRadius: 22,
    borderWidth: 3,
  },
  mb: {
    marginBottom: 14,
  },
});