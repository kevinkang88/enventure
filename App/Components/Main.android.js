import React, { Component } from 'react';
var CONFIG = require('../Utilities/Config.js');
var EnventureButton = require('./EnventureButton.js');
var InputWithTitle = require('./InputWithTitle.js');

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


var styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  }
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  goToLogin() {
    this.props.navigator.push(CONFIG.ROUTES.LOGIN);
  }

  goToInventory() {
    this.props.navigator.push(CONFIG.ROUTES.INVENTORY);
  }

  goToAddItems() {
    this.props.navigator.push(CONFIG.ROUTES.ADD_ITEMS);
  }

  goToAddQuantity() {
    this.props.navigator.push(CONFIG.ROUTES.ADD_QUANTITY);
  }

  render() {
    return (
      <View style={styles.container}>
        <EnventureButton width={50} text='Enter' onPress={this.goToLogin.bind(this)}/>
        <EnventureButton width={75} text='Inventory' onPress={this.goToInventory.bind(this)}/>
      </View>
    )
  }
}

module.exports = Main;
