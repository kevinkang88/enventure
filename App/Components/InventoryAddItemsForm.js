import React, { Component } from 'react';
import Form from 'react-native-form';

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
		width: 300,
		color: '#333333'
	},
	inventoryInput: {
		height: 50,
		backgroundColor: '#ebeef0',
		padding: 4,
		marginRight: 5,
		width: 300,
		fontSize: 18,
		borderWidth: 1,
		textAlign: 'center',
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
		height: 55,
		flexDirection: 'row',
		backgroundColor: 'cornflowerblue',
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		marginTop: 20,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
});

class InventoryAdditemsForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			inventoryItem: '',
			isLoading: false
		}
	}
	getTextInputField(){
		// create another item form field
		console.log("add another form field")
	}
	handleChange(event){
		// this.refs.form.getValues() //how do we store this in a database on the phone? for development?
		// will need to update to get multiple attributes from form
		this.setState({
			inventoryItem: event.nativeEvent.text,
		})
	}
	handleSubmit(){
		console.log('submitting')
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
					<TextInput style={styles.inventoryInput} value={this.state.inventoryItem} placeholder="item" onChange={this.handleChange.bind(this) } />
				</View>
				</Form>
				<TouchableHighlight
					style={styles.button}
					onPress={this.handleSubmit.bind(this)}
					underlayColor="white">
					<Text style={styles.header}>DONE</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.button}
					onPress={this.getTextInputField.bind(this)}
					underlayColor="white">
					<Text style={styles.header}>Add Items</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

module.exports = InventoryAdditemsForm;