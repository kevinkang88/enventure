import React, { Component } from 'react';
var Main = require('./App/Components/Main');

import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';


var styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
})

class ENVenture extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'Main', component: Main}}
            configureScene={() => {
                return Navigator.SceneConfigs.FloatFromRight;
            }}
            renderScene={(route, navigator) => {
                // count the number of func calls
                console.log(route, navigator);

                if (route.component) {
                    return React.createElement(route.component, { navigator });
                }
            }}
         />
    );
  }
}

AppRegistry.registerComponent('ENVenture', () => ENVenture);
