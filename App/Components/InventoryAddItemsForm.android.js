import React, { Component } from 'react';

import {
	StyleSheet,
	Text,
	View
} from 'react-native';

import {
	Form,
	InputField
} from 'react-native-form-generator';

var EnventureButton = require('./../Helpers/EnventureButton.js');
var schema = require('../Models/Schema');
var guidGenratior = require("../Utilities/guidGenerator");

var styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#FFFFFF'
	},
	inputWrapper: {
		flex:1,
		height: 55,
		borderWidth: 3,
		borderRadius: 10,
		borderStyle: 'solid',
		borderColor: '#6BCEBB',
		margin: 10
	},
	footerContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0
	}
});

class InventoryAdditemsForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLoading: false,
			formData:{}
		}
	}

	handleGoToAdd(){
	/*
	* TODO:
	* Reset form to blank fields
	* */
	}

	handleAddItem(){
		
		// Seeds database... 
		// 	schema.write(() => {
		// 		schema.create('Item', {
		// 			name: 'Solar Panel',
		// 			price: 10,
		// 			cost: 8,
		// 			quantity: 200
		// 		});
		// });

		// Once form fixed
		schema.write(() => {
			schema.create('Item', this.state.formData);
		});
	};
	
	// We might find a way to do this differently
	handleFormChange(formData){
		/*
		formData will contain all the values of the form:
		formData = {
			name:"",
			price:"",
			cost: '',
			quantity: Date
		}
		*/

		// Parsing strings to numbers
		formData = {
			id: guidGenratior(),
			name:  formData.name,
			price: parseInt(formData.price),
			cost: parseInt(formData.cost),
			quantity: parseInt(formData.quantity)
		};

		this.setState({formData: formData});
		this.props.onFormChange && this.props.onFormChange(formData);
	}

	handleFormFocus(){
		//	No idea what to put here :p
	}

	footer(){
		return (
			<View style={styles.footerContainer}>
				<EnventureButton
					width='100'
					type='footer'
					text='NEW'
					iconSize='60'
					onPress={this.handleGoToAdd.bind(this)}
				/>
			</View>
		)
	}

	form(){
		return(
			<View
				keyboardShouldPersistTaps={true}>
				<Form
					ref='itemForm'
					onFocus={this.handleFormFocus.bind(this)}
					onChange={this.handleFormChange.bind(this)}
					label="Add an Item">
					<InputField ref='name' placeholder='Item Name'/>
					<InputField ref='price' placeholder='Unit Price'/>
					<InputField ref='cost' placeholder='Unit Cost'/>
					<InputField ref='quantity' placeholder='Quantity'/>
				</Form>
				<EnventureButton
					width='95'
					type='footer'
					icon='check'
					iconSize='60'
					onPress={this.handleAddItem.bind(this)}
				/>
				<Text>{JSON.stringify(this.state.formData)}</Text>
			</View>
		)
	}

	render (){
		return (
			<View style={styles.container}>
				{this.form()}
				{this.footer()}
			</View>
		)
	}
}

module.exports = InventoryAdditemsForm;