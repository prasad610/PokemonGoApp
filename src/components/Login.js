import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  Button,
  Text,
  ActivityIndicator,
} from 'react-native';
import styles from '../assets/StyleSheets/styles';
import constants from '../utility/Constants';
import apiCalls from '../utility/apiCalls.js';
import extraFunctions from '../utility/Extra_Functions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {ButtonClick: false};
  }

  async _userExist() {
    // console.log(this.state.username, this.state.password);
    return await apiCalls
      ._verifyLogin(this.state.username, this.state.password)
      .then(result => {
        if (
          result === 'User not found' ||
          result === 'Cant be null' ||
          result === false
        ) {
          return false;
        } else {
          // console.log('Storeing access_token...');
          // console.log(`access_token : ${result.auth_code}`);
          extraFunctions._storeData('access_token', result.auth_code);
          // console.log(`Username : ${this.state.username}`);
          extraFunctions._storeData('username', this.state.username);
          // console.log('access_token stored');
          return true;
        }
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  render() {
    return (
      <View style={styles.app}>
        <Image
          accessibilityLabel="React logo"
          source={require('../assets/images/logo.png')}
          resizeMode="contain"
          style={[styles.logo]}
        />
        <TextInput
          placeholder="Enter ID"
          style={[styles.textInput]}
          onChangeText={text => {
            this.setState({username: text});
          }}
        />
        <TextInput
          placeholder="Enter Password"
          style={[styles.textInput]}
          secureTextEntry={true}
          onChangeText={text => {
            this.setState({password: text});
          }}
        />
        <Text
          style={[styles.link]}
          onPress={() => {
            this.props.navigation.navigate('ForgotPassword');
          }}>
          Forgot Password?
        </Text>
        <View style={styles.button}>
          {!this.state.ButtonClick ? (
            <Button
              title="Login"
              onPress={async () => {
                this.setState({ButtonClick: true});
                if (await this._userExist()) {
                  this.props.navigation.navigate('SwitchNavigator');
                } else {
                  alert('Incorrect Id or password');
                }
              }}
            />
          ) : (
            <ActivityIndicator size="large" color="#0099ff" />
          )}
        </View>
        <View style={styles.button}>
          <Button
            title="Signup"
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}
          />
        </View>
      </View>
    );
  }
}

export default Login;
