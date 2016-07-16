import React, { Component } from 'react';
// const Realm = require('realm');

// const Realm = require('realm');
const Schema = require('../Models/Schema.js');
// const Schemai = require('../Models/Inventory.js');

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Navigator,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcomeBox: {
    flex: 3,
  },
  centralBox: {
    flex: 3,
  },
  actionBox: {
    flex: 6,
  },
  inputPhoneNumber: {
    height: 60,
    textAlign: 'center',
    borderColor: 'blue',
    borderWidth: 1
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'gray',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 40,
    color: '#333333',
    margin: 10,
    marginBottom: 5,
  },
  sellText: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 20
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    alignSelf: 'center'
  },
});

class Login extends Component {
  constructor(props){
  super(props);
    this.state = {
      phoneNumber: ''
    }
  }

  handleChange(event){
  this.setState({
    phoneNumber: event.nativeEvent.text
    });
  }
  handleSubmit(){
    console.log("Submitted")
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.welcomeBox}>
          <Text style={styles.headerText}>TapTap</Text>
        </View>
        <View style={styles.centralBox}>
          <Text style={styles.sellText}>
            Record Inventory
          </Text>
          <Text style={styles.sellText}>
            Track Your Sales
          </Text>
          <Text style={styles.sellText}>
            Predict Orders
          </Text>
          <Text style={styles.sellText}>
            Count of Users in Realm: {realm.objects('User').length}
          </Text>
        </View>
        <View style={styles.actionBox}>
          <TextInput
            style={styles.inputPhoneNumber}
            onChange={this.handleChange.bind(this)}
            keyboardType="phone-pad"
            placeholder="+ 7 + phone number"
            placeholderTextColor="#1177DD"
            value={this.state.phoneNumber} />
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}> LOG IN / SIGN UP </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

module.exports = Login;
