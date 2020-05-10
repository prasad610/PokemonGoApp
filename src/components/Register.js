import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import styles from '../assets/StyleSheets/styles';
import constants from '../utility/Constants';
import apiCalls from '../utility/apiCalls';
import extraFunctions from '../utility/Extra_Functions';

class Register extends Component {
  constructor() {
    super();
    this.state = {isButtonClick: false};
  }

  _validateUserName() {
    return /^[0-9a-zA-Z]+$/.test(this.state.username);
  }

  _validateTrainerCode() {
    return /^[0-9]{12}$/.test(this.state.trainerCode);
  }

  _validatePassword() {
    // The string must contain at least 1 lowercase alphabetical character,must contain at least 1 uppercase alphabetical character ,must contain at least 1 numeric character,must contain at least one special character,must be eight characters or longer
    // return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
    //   this.state.password,
    // );
    return true;
  }
  _validateEmail() {
    return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(
      this.state.email,
    );
  }
  _validateMobile() {
    return /^[0-9]{10}$/.test(this.state.mobile);
  }

  _validateCity() {
    return /^[a-zA-Z]+$/.test(this.state.city);
  }

  async _formValidation() {
    if (
      this._validateUserName() &&
      this._validateMobile() &&
      this._validateEmail() &&
      this._validatePassword() &&
      this._validateCity() &&
      this._validateTrainerCode()
    ) {
      return await apiCalls
        ._createUser(
          this.state.username,
          this.state.trainerCode,
          this.state.password,
          this.state.email,
          this.state.mobile,
          this.state.city,
        )
        .then(async access_token => {
          return await apiCalls
            ._addTrainerCode(this.state.username, this.state.trainerCode)
            .then(() => {
              return true;
            });
        })
        .catch(err => {
          console.log(err);
        });
    }
    return false;
  }

  render() {
    return (
      <ScrollView>
        <View style={{padding: 10}}>
          <Image
            accessibilityLabel="React "
            source={require('../assets/images/logo.png')}
            resizeMode="contain"
            style={[styles.logo]}
          />
          <TextInput
            placeholder="Enter Username"
            style={styles.textInput}
            onChangeText={v => {
              this.setState({username: v});
            }}
          />
          <TextInput
            placeholder="Enter Trainer Code"
            style={styles.textInput}
            onChangeText={v => {
              this.setState({trainerCode: v});
            }}
          />
          <TextInput
            placeholder="Enter Password"
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={v => {
              this.setState({password: v});
            }}
          />

          <TextInput
            placeholder="Enter mailID"
            style={styles.textInput}
            onChangeText={v => {
              this.setState({email: v});
            }}
          />

          <TextInput
            placeholder="Mobile Number"
            style={styles.textInput}
            onChangeText={v => {
              this.setState({mobile: v});
            }}
          />

          <TextInput
            placeholder="City"
            style={styles.textInput}
            onChangeText={v => {
              this.setState({city: v});
            }}
          />
          {!this.state.isButtonClick ? (
            <Button
              title="Sign Up"
              onPress={async () => {
                let status = await this._formValidation();
                if (status) {
                  this.props.navigation.goBack();
                } else {
                  if (!this._validateUserName()) {
                    alert(
                      `Invalid username. Username must only contain character from 0-9 a-z.`,
                    );
                  } else if (!this._validateTrainerCode()) {
                    alert(`Invalid Trainer code. It must be 12 digit numeric`);
                  } else if (!this._validatePassword()) {
                    alert(`Invalid password.`);
                  } else if (!this._validateEmail()) {
                    alert(`Invalid email.`);
                  } else if (!this._validateMobile()) {
                    alert(`Invalid mobile number.`);
                  } else if (!this._validateCity()) {
                    alert('Invalid city.');
                  }
                }
              }}
            />
          ) : (
            <ActivityIndicator size="large" color="#00ff00" />
          )}
        </View>
      </ScrollView>
    );
  }
}
export default Register;
