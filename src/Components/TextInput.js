import { StyleSheet, TextInput } from 'react-native';
import React, { Component } from 'react';

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      passwd: "",
      userBorderColor: "transparent",
      passwdBorderColor: "transparent"
    }

    this.inputRef = React.createRef();
  }

  borderClr = `${this.props.inputName}BorderColor`;

  render() {
    return (
      <TextInput ref={this.inputRef}
        onFocus={() => this.setState({ [this.borderClr]: "#08409c"})}
        onBlur={() => this.setState({ [this.borderClr]: "transparent" })}
        style={[styles.input, styles.mb, { borderColor: this.state[this.borderClr]}]}
        keyboardType={"default"}
        autoFocus={this.props.inputName === "username" ? true : false}
        placeholder={this.props.inputName}
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