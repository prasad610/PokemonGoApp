import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from '../assets/StyleSheets/styles';
import ChatWithUser from './ChatWithUser';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {users: [{username: 'Sagar'}, {username: 'Sagar1'}]};
  }

  loadChats = username => {
    this.props.navigation.navigate('Chats', {title: username + ' '});
  };

  popuplateUsers = () => {
    return this.state.users.map((entry, index) => {
      return (
        <TouchableOpacity
          onPress={() => {
            this.loadChats(entry.username);
          }}
          key={index}>
          <View key={index} style={styles.recieverList}>
            <View style={styles.recieverNameView}>
              <Text>{entry.username}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <View>
        <View>
          <ScrollView>{this.popuplateUsers()}</ScrollView>
        </View>
      </View>
    );
  }
}
