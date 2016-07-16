import React, { Component } from 'react';
var Login = require('./Login');
var InventoryAdditemsForm = require('./InventoryAddItemsForm');
var AddCost = require('./InventoryAddUnitCostForm');

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
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
});

class Main extends Component {
  constructor(props){
  super(props);
  }

  goToLogin(){
    this.props.navigator.push({
        name: 'Login',
        component: Login
    });
  }
  goToAddItems(){
    this.props.navigator.push({
      name: 'InventoryAdditemsForm',
      component: InventoryAdditemsForm
    });
  }
  goToAddCost(){
    this.props.navigator.push({
      name: 'AddCostToInventory',
      component: AddCost
    })
  }
	
  render() {
    return (

      <View style={styles.container}>
        <Text> Hello ENVenture! </Text>
        <TouchableHighlight
          onPress={this.goToLogin.bind(this)}
          underlayColor="blue">
          <Text> ENTER </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.goToAddItems.bind(this)}
          underlayColor="blue">
          <Text> Add Items to Inventory </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.goToAddCost.bind(this)}
          underlayColor="blue">
          <Text> Add Cost to Inventory </Text>
        </TouchableHighlight>
    </View>
    )
  }
}

module.exports = Main;
