import React, { Component } from 'react';
var Main = require('./App/Components/Main');

import {
    AppRegistry,
    StyleSheet,
    Navigator
    } from 'react-native';

class ENVenture extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ title:'Main', component:Main }}
                renderScene={(route, navigator) => {
                    if (route.component) {
                        return React.createElement(route.component, { navigator });
                    }
                }}
            />
        );
    }
}

AppRegistry.registerComponent('ENVenture', () => ENVenture);
