import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Navigator,
  TouchableHighlight,
  AsyncStorage,
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
    flex: 4,
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
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    alignSelf: 'center'
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {"phoneNumber": ""}
  }

  componentDidMount(){
    AsyncStorage.getItem("phoneNumber")
    .then((value) => {
      this.setState({"phoneNumber": value});
    }).done();
  }

  handleKeystroke(event){
    this.setState({ "phoneTextField": event.nativeEvent.text });
  }

  saveData(event){
    AsyncStorage.setItem("phoneNumber", this.state.phoneTextField);
    this.setState({ "phoneNumber": this.state.phoneTextField });
    console.log("Saving");
    console.log(this.state.phoneNumber);
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
        </View>
        <View style={styles.actionBox}>
          <Text>
            {this.state.phoneNumber}
          </Text>
          <TextInput
            onChange={this.handleKeystroke.bind(this)}
            keyboardType="phone-pad"
            placeholder="Enter Phone Number"
            placeholderTextColor="#1177DD"
            value={this.state.phoneTextField} />

          <TouchableHighlight
            style={styles.button}
            onPress={this.saveData.bind(this)}
            underlayColor="white">
            <Text style={styles.buttonText}> CREATE ACCOUNT </Text>
     </TouchableHighlight>
        </View>
      </View>
    )
  }
}

module.exports = Login;
