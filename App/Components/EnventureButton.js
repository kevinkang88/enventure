import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TouchableNativeFeedback
} from 'react-native';

var styles = StyleSheet.create({
	defaultButton: {
		backgroundColor: '#6BCEBB',
		height: 60,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 5,
		marginBottom: 5
	},

	buttonText: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#FFFFFF'
	}
});

class EnventureButton extends React.Component {

	textOrButton(props) {
		if (props.icon) {
			return (<Icon name={props.icon} size={30} color="#FFFFFF" />);
		}else{
			return(<Text style={styles.buttonText}> {this.props.text.toUpperCase()}</Text>);
		}
	}

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
				                    underlayColor={'#666666'}>
					{this.textOrButton(this.props)}
				</TouchableHighlight>
				<View style={{flex:sideMarginWidth}}/>
			</View>
		)
	}

}

module.exports = EnventureButton;

