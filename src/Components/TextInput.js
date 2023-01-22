import { StyleSheet, TextInput, View, Text } from 'react-native';
import React, { Component } from 'react';
import userContext from 'Auth/context';
import loginCheck from 'Auth/loginCheck';
import signCheck from 'Auth/signCheck';
import { tempPassword, tempUsername } from '../db/AsyncConnection';

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
      error: "",
    }

    this.handleTextEvent = this.handleTextEvent.bind(this);
  }

  // border color variable
  borderClr = `${this.props.inputName}BorderClr`;

  // context api
  static contextType = userContext;

  handleTextEvent(text, value) {
    this.setState({[this.props.inputName]: text});

    if(this.props.inputName === "logUsername") {
      tempUsername(this.state.logUsername);
    } else {
      tempPassword(this.state.logPassword);
    }

    // Input checking methods
    const loginFault = loginCheck(this.state, value.setAccess);
    const signFault = signCheck(this.state, value.setAccess);
    
    // Show to user what type of error occurred
    if (loginFault.error || signFault.error) {
      console.log(loginFault);
      this.setState({ error: loginFault.message || signFault.message })
    } else {
      this.setState({error: ""});
    }

  }

  render() {
      return (
        <userContext.Consumer>
          {
            (value) => (
              <View>
                <TextInput
                  onFocus={() => this.setState({ [this.borderClr]: "#276ec4" })}
                  onBlur={() => this.setState({ [this.borderClr]: "#999" })}
                  maxLength={25}
                  style={(!this.props.borderBtm) ?
                    [styles.input, styles.mb, { borderColor: this.state[this.borderClr] }] :
                    { ...styles.input, ...styles.borderBottom }
                  }
                  autoFocus={this.props.inputName === "logUsername" ? true : false}
                  placeholder={this.props.inputName.slice(3)}
                  value={this.state[this.props.inputName]}
                  onChangeText={(text) => this.handleTextEvent(text, value)}
                  keyboardType={this.props.type}
                  secureTextEntry={this.props.secure ? true : false}
                />
                <Text style={{color: "red", fontWeight: "600"}}>{this.state.error}</Text>
              </View>
            )
          }
        </userContext.Consumer>
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