import React, { Component } from 'react';
var CONFIG = require('../Utilities/Config.js');
var EnventureButton = require('./EnventureButton.js').default;
var InputWithTitle = require('./InputWithTitle.js').default;

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

  goToAddCost() {
    this.props.navigator.push(CONFIG.ROUTES.ADD_COST);
  }

  render() {
    return (
      <View style={styles.container}>
        <InputWithTitle placeholder='Name'>Inventory Item Name</InputWithTitle>
        <EnventureButton width={50} text='Enter' onPress={this.goToLogin.bind(this)}/>
        <EnventureButton width={75} text='Inventory' onPress={this.goToInventory.bind(this)}/>
        <EnventureButton text='Add Items to Inventory' onPress={this.goToAddItems.bind(this)}/>
        <EnventureButton text='Add Cost to Inventory' onPress={this.goToAddCost.bind(this)}/>
      </View>
    )
  }
}

module.exports = Main;
