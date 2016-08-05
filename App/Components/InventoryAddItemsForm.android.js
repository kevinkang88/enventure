import React, { Component } from 'react';

import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TextInput,
	Navigator,
	TouchableHighlight,
	ScrollView,
	ListView
} from 'react-native';

import { Form,
	Separator,InputField, LinkField,
	SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';

var InputWithTitle = require('./InputWithTitle.js');
var EnventureButton = require('./EnventureButton.js');
var schemas = require('../Models/Schema');

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

	handleAddItem(){
		schemas.write(() => {
			schemas.create('ItemSchema', this.state.formData);
		});
	};

	handleGoToAdd(){
		this.props.navigator.push({
			title: 'Add Items To Inventory',
			component: AddItems
		});
	}

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

		this.setState({formData:formData});
		this.props.onFormChange && this.props.onFormChange(formData);
	}

	handleFormFocus(){}

	footer(){
		return (
			<View>
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
						<InputField ref='name' placeholder='Item Name'/>
					</View>
					<View style={styles.inputWrapper}>
						<InputField ref='price' placeholder='Unit Price'/>
					</View>
					<View style={styles.inputWrapper}>
						<InputField ref='cost' placeholder='Unit Cast'/>
					</View>
					<View style={styles.inputWrapper}>
						<InputField ref='quantity' placeholder='Quantity'/>
					</View>
				</Form>
				<EnventureButton
					width='95'
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
				{this.form()}
				{this.footer()}
			</View>
		)
	}
}

module.exports = InventoryAdditemsForm;