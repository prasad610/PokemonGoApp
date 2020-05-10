import React ,{ Component } from 'react';
import { createAppContainer} from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from "react-navigation-stack";
import Login from '../screens/Login.js';
import Register from '../screens/Register.js';

const AppNavigator = createStackNavigator({
  Login: {screen: Login,},
  Register: { screen: Register, },
});

export default createAppContainer(AppNavigator);