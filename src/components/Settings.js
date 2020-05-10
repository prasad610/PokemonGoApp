import React, {Component} from 'react';
import {View, Text, Button, Linking} from 'react-native';
import styles from "../assets/StyleSheets/styles";
export default class Settings extends Component {
  render() {
    return (
      <View style={[styles.app,{flex: 1}]}>
        <View style={styles.creditContainer}>
          <Text style={styles.credit}>
            This application was created with the goal of allowing pokemonGO
            players to decide before hand the trades with people they know but
            also find people in neighbourhod who have what you need but don't
            know you.
            {'\n'}
          </Text>
          <Button
            title="Feedback "
            onPress={() => {
              Linking.openURL(
                'mailto: prasaddighe.developer@gmail.com?subject=Feeback from pokemonGoTrades',
              );
          }} />
        </View>
      </View>
    );
  }
}
