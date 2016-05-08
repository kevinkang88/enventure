import React, { Component } from 'react';
var Login = require('./Login');

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
    backgroundColor: '#FFFFFF',
  },
})

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

  render() {
    return (

      <View style={styles.container}>
        <Text> Hello ENVenture! </Text>
        <TouchableHighlight
          onPress={this.goToLogin.bind(this)}
          underlayColor="blue">
          <Text> ENTER </Text>
        </TouchableHighlight>
    </View>
    )
  }
}

module.exports = Main;
