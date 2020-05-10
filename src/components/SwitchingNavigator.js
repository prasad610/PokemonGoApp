import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import ViewTrade from './ViewTrade';
import ViewTrainerCode from './ViewTrainerCode';
import AddTrades from './AddTrades';
import Messages from './Messages';
import {Icon} from 'react-native-elements';
import Settings from './Settings';
import {createStackNavigator} from 'react-navigation-stack';
import chatWithUser from './ChatWithUser';
import constant from '../utility/Constants'

const messageStack = createStackNavigator({
  Message: {
    screen: Messages,
    navigationOptions: {
      headerTitle: 'Chats ',
    },
  },
  Chats: {
    screen: chatWithUser,
  },
});
const tradesStack = createStackNavigator({
  'View Trades': {
    screen: ViewTrade,
    navigationOptions: {
      headerShown: false,
    },
  },
  Chats: {
    screen: chatWithUser,    
  },
});

const bottomTabNavigator = createBottomTabNavigator(
  {
    'View Trades': {
      screen: tradesStack,
      navigationOptions: {
        tabBarIcon: <Icon type="font-awesome" name="exchange" />,        
      },
    },
    'View Trainer Code': {
      screen: ViewTrainerCode,
      navigationOptions: {
        tabBarIcon: <Icon type="font-awesome" name="user" />,
      },
    },
    // Messages: {
    //   screen: messageStack,
    //   navigationOptions: {
    //     tabBarIcon: <Icon type="font-awesome" name="comments" />,
    //   },
    // },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: <Icon type="font-awesome" name="gears" />,
      },
    },
  },
  {
    backBehavior: 'none',
    tabBarOptions:{
      activeTintColor:constant.colors.RED,
    }
  },
  
);

const AppContainer = createAppContainer(bottomTabNavigator);

class SwitchingNavigator extends Component {
  render() {
    return <AppContainer />;
  }
}

export default SwitchingNavigator;
