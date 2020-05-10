import React, {Component} from 'react';
import constants from '../utility/Constants';
import {
  View,
  BackHandler,
  TextInput,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import styles from '../assets/StyleSheets/styles';
import Card from './Card';
import {Icon} from 'react-native-elements';
import AddTrades from './AddTrades';
import apiCalls from '../utility/apiCalls.js';
import extraFunctions from '../utility/Extra_Functions';

export default class ViewTrade extends Component {
  constructor(props) {
    super(props);
    this.handleBackPress = this.handleBackPress.bind(this);
    this.state = {
      previousData: [],
      data: [{}],
      isModalVisible: false,
      city: '',
      pokemon: '',
    };

    this._getData();
    // setInterval(() => {
    //   this._getData();
    // }, 30 * 60 * 1000);
  }

  async _getData() {
    let d = await apiCalls._getTrades();
    this.setState({data: d});
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
  }

  componentDidUnMount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  async handleBackPress() {
    this.props.navigation.goBack(null);
    await this._getData();
    return true;
  }

  _handleMessagePress(username) {
    console.log(username);
  }

  _makeCards = () => {
    if (this.state.city === '' && this.state.pokemon === '') {
      return (
        <Card
          data={this.state.data}
          element="Trades"
          update={this.handleBackPress}
          {...this.props}
        />
      );
    } else if (this.state.city !== '' && this.state.pokemon === '') {
      return (
        <Card
          data={this.state.data.filter(element => {
            return element.city === this.state.city;
          })}
          element="Trades"
        />
      );
    } else if (this.state.city === '' && this.state.pokemon !== '') {
      return (
        <Card
          data={this.state.data.filter(element => {
            console.log(
              this.state.pokemon,
              element.give,
              this.state.pokemon == element.give,
            );
            return element.give == this.state.pokemon;
          })}
          element="Trades"
        />
      );
    }
    return (
      <Card
        data={this.state.data.filter(element => {
          return (
            element.pokemonName === this.state.pokemon &&
            element.city === this.state.city
          );
        })}
        element="Trades"
      />
    );
  };

  _changeModalVisibility = async () => {
    this._getData();
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  _filerResults = () => {
    // let city = this.state.city;
    let pokemon = this.state.pokemon;
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.app}>
        {/* <View style={styles.viewTrade}>
          <View style={styles.search}>
            <TextInput
              placeholder="City"
              onChangeText={city => {
                this.setState({city: city.toLowerCase()});
              }}
            />
          </View>
          <View style={styles.search}>
            <TextInput
              placeholder="Pokemon"
              onChangeText={pokemon => {
                this.setState({pokemon: pokemon.toLowerCase()});
              }}
            />
          </View>
          <Icon
            name="search"
            type="font-awesome"
            iconStyle={styles.iconStyle}
            onPress={() => {
              this._filerResults();
            }}
          />
        </View> */}
        <View>{this._makeCards()}</View>
        <View style={styles.addButton}>
          <TouchableOpacity
            onPress={() => {
              // this.props.navigation.navigate('Add Trades')
              this._changeModalVisibility();
            }}>
            <Icon
              name="plus-circle"
              type="font-awesome"
              iconStyle={[styles.addIcon]}
              onPress={() => {
                this._changeModalVisibility();
              }}
            />
          </TouchableOpacity>
        </View>
        <Modal visible={this.state.isModalVisible}>
          <AddTrades callback={this._changeModalVisibility} />
        </Modal>
      </View>
    );
  }
}
