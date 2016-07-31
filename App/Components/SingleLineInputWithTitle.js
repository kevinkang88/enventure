import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    TouchableNativeFeedback
    } from 'react-native';

var styles = StyleSheet.create({
    titleWrapper: {
        flex: .6,
        height: 55,
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: '#999999',
        alignItems: 'center',
        justifyContent: 'center'
    },

    titleStyle: {
        fontSize: 15
    },

    inputWrapper: {
        flex:1,
        height: 55,
        borderWidth: 3,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: '#6BCEBB'
    },

    inputStyle: {
        height:55,
        textAlign: 'center'
    }
});

export default class SingleLineInputWithTitle extends React.Component {
    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <View style={{flex:.05}} />
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleStyle}> {this.props.children.toUpperCase()} </Text>
                </View>
                <View style={{flex:.02}} />
                <View style={{flex:.28, flexDirection: 'column'}}>
                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.inputStyle} textAlignVertical='center' underlineColorAndroid='rgba(0,0,0,0)' placeholder={this.props.placeholder}/>
                    </View>
                </View>
                <View style={{flex:.05}} />
            </View>
        )
    }

};
