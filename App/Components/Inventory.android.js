import React, { Component } from 'react';

var EnventureButton = require('./EnventureButton.js');
var AddItems = require('./InventoryAddItemsForm');

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
	},
	footerContainer: {
		alignItems: 'center',
		flexDirection: 'row'
	}
});

class Inventory extends Component {

	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
		this.inv = [
				{
					name: 'Poa Stove',
					price: '10'
				},
				{
					name: 'Queen Solar Panels',
					price: '5'
				},
				{
					name: 'Stove Coal Yeah',
					price: '9'
				}
			];
		this.state = {
			dataSource: this.ds.cloneWithRows(this.inv)
		}
	}

	handleTransaction(){
		console.log("Handeling tansaction with DB");
	}

	handleGoToAdd(){
		this.props.navigator.push({
			title: 'Add Items To Inventory',
			component: AddItems
		});
	}

	renderRow(rowData){
		return (
			<View style={styles.rowContainer}>
				<Text style={styles.rowText}> {rowData.name} ${rowData.price}</Text>
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
              {text: 'OK', onPress: () => {this.handleTransaction()}}
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
				  onPress={this.handleGoToAdd.bind(this)}
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