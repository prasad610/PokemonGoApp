import React, {Component} from 'react';
import constants from '../utility/Constants';
import styles from '../assets/StyleSheets/styles';
import {View, Text, TextInput, Picker, Button} from 'react-native';
import pokemonList from '../utility/pokemon_list';
import apiCalls from '../utility/apiCalls.js';
import extraFunctions from '../utility/Extra_Functions';

export default class AddTrades extends Component {
  constructor(props) {
    super(props);
    this._onSubmit = this._onSubmit.bind(this);
    this.state = {};
  }
  listToAdd = pokemonList;

  addPicker = listToAdd => {
    return this.listToAdd.map(element => {
      return (
        <Picker.Item label={element.name} value={element.id} key={element.id} />
      );
    });
  };

  _onSubmit = () => {
    // this.props.navigation.navigate('View Trades');
    // this.props.callback();
    if (
      this.state.WhatTheyGive === 'disabled' ||
      this.state.whatTheyWant === 'disabled' ||
      typeof this.state.cp === 'undefined' ||
      typeof this.state.city === 'undefined'
    ) {
      alert('Check the form again.');
      return false;
    }

    apiCalls
      ._addTrades(
        this.state.whatTheyWant,
        this.state.WhatTheyGive,
        this.state.cp,
        this.state.city,
      )
      .then(response => {
        this.props.callback();
      });
  };
  _onClose = () => {
    this.props.callback();
  };

  render() {
    return (
      <View>
        <View style={[styles.app, {justifyContent: 'center'}]}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.WhatTheyGive}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({WhatTheyGive: itemValue})
            }>
            {this.addPicker()}
          </Picker>
          <TextInput
            placeholder="Enter CP"
            style={styles.textInput}
            onChangeText={text => {
              this.setState({cp: text});
            }}
          />
          <TextInput
            placeholder="Enter city"
            style={styles.textInput}
            onChangeText={text => {
              this.setState({city: text});
            }}
          />
          <Picker
            style={styles.picker}
            selectedValue={this.state.whatTheyWant}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({whatTheyWant: itemValue})
            }>
            {this.addPicker()}
          </Picker>
          <View style={styles.button}>
            <Button title="Submit" onPress={this._onSubmit} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={this._onClose} />
          </View>
        </View>
      </View>
    );
  }
}
