import React, { Component } from 'react';

import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
		marginTop: 50
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	header: {
		textAlign: 'center',
		fontSize: 40,
		color: '#333333',
		margin: 10,
		marginBottom: 5,
	}
	inventoryInput: {
		height: 40,
		padding: 4,
		marginRight: 5,
		fontSize: 22,
		borderWidth: 1,
		borderColor: 'white', 
		borderRadius: 8,
		color: 'red'
	}
	buttonText: {
		fontSize: 18,
		color: "#111",
		alignSelf: 'center'
	},
	button: {
		height: 45,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		marginTop: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
});

class InventoryAdditemsForm extends Component {
	render (){
		return (
			<View style={styles.container}>
				<Text style={styles.header}>Add Your Inventory</Text>
			</View>
			)
	}
}