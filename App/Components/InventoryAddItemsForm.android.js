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

var EnventureButton = require('./EnventureButton.js');
var schema = require('../Models/Schema');

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
			inventoryItem: '',
			isLoading: false,
			formData:{}
		}
	}

	handleGoToAdd(){
		this.setState({formData:{}});
	}

	handleAddItem(){
		
		// Seeds database... 
			schema.write(() => {
				schema.create('Item', {
					name: 'Solar Panel',
					price: 10,
					cost: 8,
					quantity: 200
				});
		});
		
		// Once form fixed
		// schema.write(() => {
		// 	schema.create('Item', this.state.formData);
		// });

	};

	handleFormChange(formData){
		/*
		formData will contain all the values of the form:

		formData = {
			item_name:"",
			item_price:"",
			item_cost: '',
			item_quantity: Date
		}
		*/

		// Something is breaking here!!!
		// Error: Calling component directly
		// this.setState({formData:formData});
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
			<View keyboardShouldPersistTaps={true}>
				<Form
					ref='itemForm'
					onFocus={this.handleFormFocus.bind(this)}
					onChange={this.handleFormChange.bind(this)}
					label="Add an Item">
					<View style={styles.inputWrapper}>
						<InputField ref='item_name' placeholder='Item Name'/>
					</View>
					<View style={styles.inputWrapper}>
						<InputField ref='item_price' placeholder='Unit Price'/>
					</View>
					<View style={styles.inputWrapper}>
						<InputField ref='item_cost' placeholder='Unit Cast'/>
					</View>
					<View style={styles.inputWrapper}>
						<InputField ref='item_quantity' placeholder='Quantity'/>
					</View>
				</Form>
				<EnventureButton
					width='95'
					type='footer'
					icon='plus-circle'
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
				{this.form(this)}
				{this.footer()}
			</View>
		)
	}
}

module.exports = InventoryAdditemsForm;