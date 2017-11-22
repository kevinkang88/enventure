import React, { Component } from 'react';
var InventoryList = require('./App/Components/InventoryList.android');

import {
    AppRegistry,
    StyleSheet,
    Navigator
    } from 'react-native';

class ENVenture extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{ title:'InventoryList', component: InventoryList }}
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
