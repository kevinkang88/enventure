import React, { Component } from 'react';
import Form from 'react-native-form'

import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TextInput,
	Navigator,
	TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
		marginTop: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	header: {
		textAlign: 'center',
		fontSize: 32,
		color: '#333333',
		margin: 10,
		marginBottom: 5,
	},
	inventoryInput: {
		height: 40,
		padding: 4,
		marginRight: 5,
		fontSize: 22,
		borderWidth: 1,
		borderColor: 'white', 
		borderRadius: 8,
		color: 'red'
	},
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
	constructor(props){
		super(props)
		this.state = {
			inventoryItem: '',
			quantityOfItem: ''
		}
	}
	getFormField(){
		// create another item form field
		console.log("add another item form field")
	}
	handleChange(event){
		this.setState({
			inventoryItem: event.nativeEvent.text,
			quantityOfItem: event.nativeEvent.text,
		})
	}
	handleSubmit(){
		this.setState({
			isLoading: true
		});
		// store data from input
	}
	render (){
		return (
			<View style={styles.container}>
				<Text style={styles.header}>Add Your Inventory</Text>
				<Form ref="form">
				<View>
					<View>
						<TextInput type="TextInput" placeholder="Item" name="inventoryItem" value={this.state.inventoryItem} />
						<TextInput type="TextInput" placeholder="Quantity" name="quantityOfItem" value={this.state.quantityOfItem} />
					</View>
				</View>
				</Form>
				<TouchableHighlight
					style={styles.button}
					onPress={this.getFormField.bind(this)}
					underlayColor="white">
					<Text>Add Another Item</Text>
					</TouchableHighlight>
				<TouchableHighlight
					style={styles.button}
					onPress={this.handleSubmit.bind(this)}
					underlayColor="white">
					<Text>Done</Text>
					</TouchableHighlight>
			</View>
			)
	}
}

module.exports = InventoryAdditemsForm;