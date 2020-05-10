import React, {Component} from 'react';
import constants from '../utility/Constants';
import styles from '../assets/StyleSheets/styles';
import {
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import Card from './Card';
import apiCalls from '../utility/apiCalls';
import extrafunctions from '../utility/Extra_Functions';
import {Icon} from 'react-native-elements';

export default class ViewTrainerCode extends Component {
  constructor() {
    super();
    this.state = {};
    this._getTrainerCodes();
  }

  _getTrainerCodes = () => {
    apiCalls._getTrainerCode().then(response => {
      this.setState({data: response});
    });
  };

  _makeCard = () => {
    if (typeof this.state.data === 'undefined') return null;
    return <Card data={this.state.data} element="Trainer" />;
  };

  render() {
    return (
      <View style={styles.app}>
        {/* <View style={styles.viewTrade}>
          <TextInput placeholder="City" style={{flex: 1}} />
          <Icon
            name="search"
            type="font-awesome"
            iconStyle={styles.iconStyle}
          />
        </View> */}
        {this._makeCard()}
      </View>
    );
  }
}
