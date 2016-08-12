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
	// Not DRY CODE HERE
	cardWrapper: {
		flex:1,
		height: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 3,
		borderRadius: 10,
		borderStyle: 'solid',
		borderColor: '#6BCEBB',
		margin: 10
	},
	cardText: {
		fontSize: 40,
		color: '#6BCEBB'
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
			items: schema.objects('Item'),
			isLoading: false,
			selectedItem: {},
			quantity: 0 // This is just a placeholder until we fix data binding
		}
	}

	handleGoToAdd(){
		this.props.navigator.push({
			title: 'Add Items To Inventory',
			component: AddItems
		});
	}

	handleAddQuantity(){
		this.setState({
			quantity: this.state.quantity + 1
		});
	};

	handleReduceQuantity(){
		if (this.state.quantity > 0){
			this.setState({
				quantity: this.state.quantity - 1
			});
		}
	};


	handleFormChange(itemName){
		var queryString = 'name = "'+ itemName +'"';

		// We need to find a way to get the objects out of the Picker not just the name and find them again
		this.setState({
			selectedItem: this.state.items.filtered(queryString).slice(0, 1)
		});

		console.log('Cambio:', this.state.selectedItem[0].name);
	}

	handleFormFocus(){
		//	No idea what to put here :p
	}

	itemsNames(){
		var obj={};
		this.state.items.forEach((item)=>{
			obj[item.name] = item.name
		});
		return obj
	}

	infoCard(){
		return(
			<View style={styles.cardWrapper}>
				<Text style={styles.cardText}>QUANTITY</Text>
				<Text style={styles.cardText}>{this.state.quantity}</Text>
			</View>
		)
	}

	buttons(){
		return(
			<View style={{marginBottom: 100}}>
				<EnventureButton
					width='30'
					icon='plus-circle'
					iconSize='60'
					onPress={this.handleAddQuantity.bind(this)}
				/>
				<EnventureButton
					width='30'
					icon='minus-circle'
					iconSize='60'
					onPress={this.handleReduceQuantity.bind(this)}
				/>
				<EnventureButton
					width='30'
					text='done'
					iconSize='60'
					onPress={this.handleReduceQuantity.bind(this)}
				/>
			</View>
		)
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
				<View style={styles.inputWrapper}>
					<PickerField
						ref='Item'
						options={this.itemsNames()}
						onChange={this.handleFormChange.bind(this)}/>
				</View>
			</View>
		)
	}

	render (){
		return (
			<View style={styles.container}>
				{this.form()}
				{this.infoCard()}
				{this.buttons()}
				{this.footer()}
			</View>
		)
	}
}

module.exports = InventoryAddQuantityForm;