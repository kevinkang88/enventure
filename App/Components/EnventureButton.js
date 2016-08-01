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
	default: {
		backgroundColor: '#6BCEBB',
		height: 60,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 5,
		marginBottom: 5
	},
	footer: {
		backgroundColor: '#6BCEBB',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 5
	},
	list: {
		backgroundColor: '#6BCEBB',
		height: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#FFFFFF'
	}
});

class EnventureButton extends React.Component {

	// Defines if the button renders text or icon
	textOrButton() {
		if (this.props.icon) {
			return (<Icon name={this.props.icon} size={parseInt(this.props.iconSize)} color="#FFFFFF" />);
		}else{
			return(<Text style={styles.buttonText}> {this.props.text.toUpperCase()}</Text>);
		}
	}

	// Defines the type of button footer or regular
	type(){
		if (this.props.type && this.props.type.toUpperCase() == 'FOOTER'){
			return(styles.footer)
		}else if(this.props.type && this.props.type.toUpperCase() == 'LIST') {
			return(styles.list)
		}else{
			return(styles.default)
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
				<TouchableHighlight style={[this.type(), {flex:buttonWidth}]}
				                    onPress={this.props.onPress}
				                    underlayColor={'#666666'}>
					{this.textOrButton()}
				</TouchableHighlight>
				<View style={{flex:sideMarginWidth}}/>
			</View>
		)
	}

}

module.exports = EnventureButton;

