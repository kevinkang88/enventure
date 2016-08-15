import React, { Component } from 'react';

import {
	Alert,
	AppRegistry,
	StyleSheet,
	Text,
	View,
	ListView,
	TextInput,
	Navigator,
	TouchableHighlight,
	TouchableNativeFeedback
} from 'react-native';

var EnventureButton = require('./../Helpers/EnventureButton.js');
var AddQuantity = require('./InventoryAddQuantityForm.android');
var schema = require('../Models/Schema');
var guidGenratior = require("../Utilities/guidGenerator");

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#FFFFFF'
	},
	formContainer: {
		backgroundColor: '#bdc3c7',
		marginTop: 30,
		marginBottom: 50,
		width: 300,
		flexDirection:'row'
	},
	header: {
		textAlign: 'center',
		fontSize: 32,
		width: 300,
		color: '#333333'
	},
	productName: {
		height: 50,
		flex: 1,
		backgroundColor: '#ebeef0',
		padding: 4,
		marginRight: 3,
		width: 170,
		fontSize: 14,
		borderWidth: 1,
		textAlign: 'center',
		borderColor: 'white',
		borderRadius: 8,
		color: 'cornflowerblue'
	},
	productCost: {
		height: 50,
		fontSize: 20,
		width: 90
	},
	rowContainer: {
		flexDirection: 'column',
		flex: 1,
		padding: 30
	},
	rowText: {
		fontSize:25,
		padding:0
	},
	buttonText: {
		fontSize: 18
	},
	button: {
		height: 60,
		backgroundColor: '#48BBEC',
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

class Inventory extends Component {

	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
		this.inv = schema.objects('Item');
		this.state = {
			dataSource: this.ds.cloneWithRows(this.inv)
		}
	}

	handleTransaction(rowData){
		//Object
		/*
		{
			price: rowData.price,
			cost: rowData.cost,
			quantity: rowData.quantity,
			createdAt: rowData.createdAt,
			item: rowData
		}
		*/

		var transaction =	{
			id: guidGenratior(),
			price: rowData.price,
			cost: rowData.cost,
			createdAt: Date.now(),
			item: rowData
		};

		schema.write(() => {
			schema.create('Transaction', transaction);
			schema.create('Item', {id: rowData.id, quantity: rowData.quantity - 1}, true);
		});
	}

	goToAddQuantity(){
		this.props.navigator.push({
			title: 'Add Quantity To Item',
			component: AddQuantity
		});
	}

	renderRow(rowData){
		return (
			<View style={styles.rowContainer}>
				<View>
					<Text style={styles.rowText}> {rowData.name} ${rowData.price}</Text>
					<Text style={styles.rowText}> available: {rowData.quantity}</Text>
				</View>
				<EnventureButton
					width="100"
					type="list"
					icon="dollar"
					iconSize="15"
					onPress={() => Alert.alert(
            'You are about to sell a product',
            'Confirm transaction',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () => {this.handleTransaction(rowData)}}
            ]
          )}
				/>
			</View>
		)
	}

	footer(){
		return (
			<View>
				<EnventureButton
					width='100'
				  type='footer'
				  icon='plus-circle'
				  iconSize='60'
				  onPress={this.goToAddQuantity.bind(this)}
				/>
			</View>
		)
	}

	render(){
		return (
			<View style={styles.container}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderRow.bind(this)}/>
				{this.footer()}
			</View>
		)
	}
}

module.exports = Inventory;