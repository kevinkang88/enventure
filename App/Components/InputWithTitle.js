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
    titleStyle: {
        fontSize: 15,
        marginBottom:5
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
        height:55
    }
});

class InputWithTitle extends React.Component {
    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <View style={{flex:.05}} />
                    <View style={{flex:.9, flexDirection: 'column'}}>
                        <Text style={styles.titleStyle}> {this.props.children.toUpperCase()} </Text>
                        <View style={styles.inputWrapper}>
                            <TextInput style={styles.inputStyle} textAlignVertical='center' underlineColorAndroid='rgba(0,0,0,0)' placeholder={this.props.placeholder}/>
                        </View>
                    </View>
                <View style={{flex:.05}} />
            </View>
        )
    }

}

module.exports = InputWithTitle;
