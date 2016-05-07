import React, { Component } from 'react';
var Login = require('./App/View/Login');

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

class ENVenture extends React.Component {
  constructor(props){
  super(props);
  }

  goToLogin(){
    console.log('testing');
    this.props.navigator.push({
      component: Login,
      title: 'Login'
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
    </View>
    )
  }
}

AppRegistry.registerComponent('ENVenture', () => ENVenture);
