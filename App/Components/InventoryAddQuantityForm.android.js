import React, { Component } from 'react';

import {
	StyleSheet,
	Text,
	View
} from 'react-native';

import {
	Form,
	InputField,
	PickerField
} from 'react-native-form-generator';

var EnventureButton = require('./EnventureButton.js');
var schema = require('../Models/Schema');
var AddItems = require('./InventoryAddItemsForm.android');

var styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#FFFFFF'
	},
	inputWrapper: {
		flex:1,
		height: 80,
		borderWidth: 3,
		borderRadius: 10,
		borderStyle: 'solid',
		borderColor: '#6BCEBB',
		margin: 10
	},
	footerContainer: {
		position: 'absolute',
		left: 0, right: 0,
		bottom: 0
	}
});

class InventoryAddQuantityForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			inventoryItem: '',
			isLoading: false,
			formData:{}
		}
	}

	handleGoToAdd(){
		this.props.navigator.push({
			title: 'Add Items To Inventory',
			component: AddItems
		});
	}

	handleAddQuantity(){};

	handleReduceQuantity(){};


	handleFormChange(formData){
		/*
		Here we might need to do something smart since
		we all al items in memory
		*/

		// Something is breaking here!!!
		// Error: Calling component directly
		// this.setState({formData:formData});
		this.props.onFormChange && this.props.onFormChange(formData);
	}

	handleFormFocus(){
		//	No idea what to put here :p
	}

	itemsNames(){
		var obj={"":''};
		schema.objects('Item').forEach((item)=>{
			obj[item.name] = item.name
		});

		return obj
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
						<PickerField ref='Item'
					             label='Select a Product'
					             options={this.itemsNames()}/>
					</View>

				</Form>
				<View style={{marginBottom: 10}}>
					<EnventureButton
						width='30'
						icon='plus-circle'
						iconSize='60'
						onPress={this.handleAddQuantity.bind(this)}
					/>
				</View>
				<EnventureButton
					width='30'
					icon='minus-circle'
					iconSize='60'
					onPress={this.handleReduceQuantity.bind(this)}
				/>
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

module.exports = InventoryAddQuantityForm;