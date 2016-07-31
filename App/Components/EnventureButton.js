import React, { Component } from 'react';
var CONFIG = require('../Utilities/Config.js');

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableNativeFeedback
    } from 'react-native';

var styles = StyleSheet.create({
    defaultButton: {
        backgroundColor: CONFIG.CYAN,
        height: CONFIG.BUTTON_HEIGHT,
        borderRadius: CONFIG.BUTTON_BORDER_RADIUS,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },

    buttonText: {
        fontSize: CONFIG.BUTTON_FONT_SIZE,
        fontWeight: CONFIG.BUTTON_FONT_WEIGHT,
        color: CONFIG.WHITE
    }
});

export default class EnventureButton extends React.Component {
    render() {
        var sideMarginWidth, buttonWidth;

        // If no width property is set, defaults to 90%
        if (!this.props.width) {
            sideMarginWidth = .05;
            buttonWidth = .9;
        } else {
            sideMarginWidth = ((100 - this.props.width) / 2 ) / 100;
            buttonWidth = this.props.width / 100;
        }

        return (
            <View style={{flexDirection: 'row'}}>
                <View style={{flex:sideMarginWidth}}/>
                <TouchableHighlight style={[styles.defaultButton, {flex:buttonWidth}]}
                                    onPress={this.props.onPress}
                                    underlayColor={CONFIG.GREY}>
                    <Text style={styles.buttonText}> {this.props.text.toUpperCase()} </Text>
                </TouchableHighlight>
                <View style={{flex:sideMarginWidth}}/>
            </View>
        )
    }

};