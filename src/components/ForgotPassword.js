import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import constants from '../utility/Constants';
import styles from '../assets/StyleSheets/styles';

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {message: '', mailId: ''};
  }
  onSubmit = () => {
    if (this.state.mailId == '') {
      this.setState({message: 'ID is empty.'});
    } else if (
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.exec(
        this.state.mailId,
      )
    ) {
      this.setState({
        message:
          'If the account is found the reset link would be sent to : ' +
          this.state.mailId,
      });
      this.setState({
        enabled:true
      })
    } else {
      this.setState({message: 'Invalid mail ID'});
    }
  };
  render() {
    return (
      <View style={styles.app}>
        <Image
          accessibilityLabel="React logo"
          source={require('../assets/images/float-add-icon.png')}
          resizeMode="contain"
          style={[styles.logo]}
        />
        <TextInput
          placeholder="Enter your email ID"
          onChangeText={text => this.setState({mailId: text})}
          style={styles.textInput}
        />

        <Button
          title="Submit"
          onPress={() => {
            this.onSubmit();
          }}
        />

        <Text style={styles.error}>
          {this.state.message}
        </Text>
      </View>
    );
  }
}

export default ForgotPassword;
