import React, {Component} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import styles from '../assets/StyleSheets/styles';
import {Icon} from 'react-native-elements';
export default class ChatWithUser extends Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
  }

  static navigationOptions = ({navigation}) => ({
    title: (navigation.state.params || {}).title || 'Chat! ',
  });

  chat = [
    {
      sender: 'Sagar',
      reciever: 'user1',
      message: 'sender',
    },
    {
      sender: 'user1',
      reciever: 'Sagar',
      message: 'reciever',
    },
    {
      sender: 'Sagar',
      reciever: 'user1',
      message: 'abc',
    },
    {
      sender: 'user1',
      reciever: 'Sagar',
      message: 'abc',
    },
    {
      sender: 'Sagar',
      reciever: 'user1',
      message: 'abc',
    },
    {
      sender: 'user1',
      reciever: 'Sagar',
      message: 'abc',
    },
    {
      sender: 'Sagar',
      reciever: 'user1',
      message: 'abc',
    },
    {
      sender: 'user1',
      reciever: 'Sagar',
      message: 'abc',
    },
    {
      sender: 'Sagar',
      reciever: 'user1',
      message: 'abc',
    },
    {
      sender: 'user1',
      reciever: 'Sagar',
      message: 'abc',
    },
    {
      sender: 'Sagar',
      reciever: 'user1',
      message: 'abc',
    },
    {
      sender: 'user1',
      reciever: 'Sagar',
      message: 'abc',
    },
    {
      sender: 'Sagar1',
      reciever: 'user1',
      message: 'abc',
    },
    {
      sender: 'user1',
      reciever: 'Sagar',
      message: 'abc',
    },
    {
      sender: 'Sagar',
      reciever: 'user1',
      message: 'abc',
    },
  ];

  _popuplateChat = () => {
    let content = this.chat.map((messageObject, index) => {
      if (
        messageObject.sender === this.props.navigation.getParam('title').trim()
      ) {
        return (
          <View
            key={index}
            style={styles.senderView}>
            <Text
              style={styles.senderMessage}>
              {messageObject.message}
            </Text>
          </View>
        );
      } else {
        return (
          <View
            key={index}
            style={styles.recieverView}>
            <Text
              style={styles.recieverMessage}>
              {messageObject.message}
            </Text>
          </View>
        );
      }
    });
    return content;
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          {this._popuplateChat()}
          
        </ScrollView>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
            <TextInput
              placeholder="Type a message"
              style={[styles.textInput, {width: '85%'}]}
            />
            <Icon
            name="search"
            type="font-awesome"
            iconStyle={styles.iconStyle}
            onPress={() => {
              console.log('search');
            }}
          />
          </View>
      </View>
    );
  }
}
