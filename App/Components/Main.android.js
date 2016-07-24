import React, { Component } from 'react';
var Login = require('./Login');
var EnventureButton = require('./EnventureButton.js').default;
var InventoryAdditemsForm = require('./InventoryAddItemsForm.android');
var Inventory = require('./Inventory.andorid');
var AddCost = require('./InventoryAddUnitCostForm.andorid');

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
  constructor(props){
  super(props);
  }

  goToLogin(){
    this.props.navigator.push({
        name: 'Login',
        component: Login
    });
  }
	goToInventory(){
		this.props.navigator.push({
			name: 'Inventory',
			component: Inventory
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
        <EnventureButton width={50} text='Enter' onPress={this.goToLogin.bind(this)}/>
        <EnventureButton width={75} text='Inventory' onPress={this.goToInventory.bind(this)}/>
        <EnventureButton text='Add Items to Inventory' onPress={this.goToAddItems.bind(this)}/>
        <EnventureButton text='Add Cost to Inventory' onPress={this.goToAddCost.bind(this)}/>
      </View>

    )
  }
}

module.exports = Main;
