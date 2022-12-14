import { StyleSheet, TextInput } from 'react-native';
import React, { Component } from 'react';
import userContext from 'Context';

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

    this.handleTextEvent = this.handleTextEvent.bind(this);
  }

  // border color variable
  borderClr = `${this.props.inputName}BorderClr`;

  // context api
  static contextType = userContext;

  handleTextEvent (text) {
    this.setState({[this.props.inputName]: text});

    const { 
      logUsername, 
      logPassword, 
      sigEmail, 
      sigEmailBorderClr, 
      sigMobile,
      sigMobileBorderClr,
      sigPassword,
      sigPasswordBorderClr,
      sigUsername,
      sigUsernameBorderClr,
      logPasswordBorderClr,
      logUserBorderClr
     } = this.state;

    //  checking string pattern of user inputs
    this.context.logUser(logUsername);
    if(/\s/g.test(logUsername || sigUsername)) {
    } 
  }

  render() {
      return (
        <TextInput
          onFocus={() => this.setState({ [this.borderClr]: "#276ec4"})}
          onBlur={() => this.setState({ [this.borderClr]: "#999" })}
          maxLength={25}
          style={(!this.props.borderBtm) ? 
            [styles.input, styles.mb, { borderColor: this.state[this.borderClr] }] :
            {...styles.input, ...styles.borderBottom}
           }
          autoFocus={this.props.inputName === "logUsername" ? true : false}
          placeholder={this.props.inputName.slice(3)}
          value={this.state[this.props.inputName]}
          onChangeText={this.handleTextEvent}
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
  borderBottom: {
    padding: 0,
    borderRadius: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    flex: .7,
    height: "70%",
  }
});