import React, {Component} from 'react';
import {ScrollView, Text, View, Linking, Clipboard} from 'react-native';
import Toast from 'react-native-simple-toast';
import constants from '../utility/Constants';
import styles from '../assets/StyleSheets/styles';
import {Icon} from 'react-native-elements';
import ChatWithUser from './ChatWithUser';
import pokemonList from '../utility/pokemon_list';
import apiCalls from '../utility/apiCalls';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _makeCardForTrades = () => {
    let p = this.props.data[0];
    if (Object.keys(p).length === 0) {
      return null;
    }
    let card = this.props.data.map((entry, index) => {
      pokemon_give = pokemonList.filter(object => {
        return object['id'] === entry.give;
      })[0]['name'];
      pokemon_want = pokemonList.filter(object => {
        return object['id'] === entry.want;
      })[0]['name'];
      phoneno = entry.mobile;
      return (
        <View key={index} style={styles.tradeCard}>
          <View style={[styles.recieverNameView, {flex: 5}]}>
            <Text>User : {entry.username}</Text>
            <Text>Want:{pokemon_want}</Text>
          </View>
          <View style={[styles.recieverNameView, {flex: 5}]}>
            <Text>Pokemon : {pokemon_give}</Text>
            <Text>CP:{entry.cp}</Text>
          </View>
          <View style={[styles.recieverNameView, {flex: 1}]}>
            <Icon
              type="font-awesome"
              name="comments"
              iconStyle={{
                color: constants.colors.GREEN,
              }}
              onPress={() => {
                // this.props.navigation.navigate('Chats', {
                //   title: entry.user + ' ',
                // });
                Linking.openURL(
                  `whatsapp://send?text=Hey%2C%20I%20am%20messaging%20regarding%20the%20trade%20of%20${pokemon_give}%20with%20${
                    entry.cp
                  }%20cp%20&phone=+91${phoneno}.`,
                )
                  .then(data => {
                    console.log(data);
                  })
                  .catch(err => {
                    console.log(err);
                  });
              }}
            />
          </View>
          <View style={[styles.recieverNameView, {flex: 1}]}>
            <Icon
              type="font-awesome"
              name="trash"
              iconStyle={{
                color: constants.colors.RED,
              }}
              onPress={() => {
                apiCalls._deleteTrade(entry._id);
                this.props.update();
              }}
            />
          </View>
        </View>
      );
    });
    return card;
  };

  _makeCardForTrainers = () => {
    let card = this.props.data.map((entry, index) => {
      return (
        <View key={index} style={styles.tradeCard}>
          <View style={styles.recieverNameView}>
            <Text>ID : {entry.username}</Text>
          </View>
          <View style={styles.recieverNameView}>
            <Text>Trainer Code:{entry.trainerCode}</Text>
          </View>
          <View style={styles.recieverNameView}>
            <Icon
              type="font-awesome"
              name="copy"
              iconStyle={{
                color: constants.colors.GREEN,
              }}
              onPress={async () => {
                await Clipboard.setString(entry.trainerCode);
                Toast.show(`Trainer code copied.`, Toast.SHORT);
              }}
            />
          </View>
        </View>
      );
    });
    return card;
  };

  render() {
    if (this.props.element === 'Trades')
      return (
        <ScrollView style={styles.scrollView}>
          {this._makeCardForTrades()}
        </ScrollView>
      );
    else if (this.props.element === 'Trainer')
      return (
        <ScrollView style={styles.scrollView}>
          {this._makeCardForTrainers()}
        </ScrollView>
      );
  }
}
