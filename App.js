import React, {Component} from 'react';
import {AsyncStorage, Button, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './src/components/Login';
import Register from './src/components/Register';
import ForgotPassword from './src/components/ForgotPassword';
import SwitchNavigator from './src/components/SwitchingNavigator';

PreLoginStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontFamily: 'Roboto'}}>Login</Text>
        </View>
      ),
      headerLeft: null,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerTitle: (
        <View>
          <Text style={{fontSize: 20, fontFamily: 'Roboto'}}>Register</Text>
        </View>
      ),
      // headerLeft: null,
    },
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      headerTitle: (
        <View>
          <Text style={{fontSize: 20, fontFamily: 'Roboto'}}>
            Forgot Password
          </Text>
        </View>
      ),
      // headerLeft: null,
    },
  },
  SwitchNavigator: {
    screen: SwitchNavigator,
    navigationOptions: {
      header: null,
    },
  },
});

const AppContainer = createAppContainer(PreLoginStack);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
