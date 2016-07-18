import React, { Component } from 'react';

import {
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

var InventoryAddItemsForm = require('./InventoryAddItemsForm.android');

var styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
		marginTop: 50,
		justifyContent: 'center',
		alignItems: 'center',
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
		padding: 10
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
		backgroundColor: '#E3E3E3',
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
			name: 'InventoryAddItemsForm',
			component: InventoryAddItemsForm
		});
	}

	renderRow(rowData){
		return (
			<View>
				<Text> {rowData.name} {rowData.price}</Text>
				<TouchableNativeFeedback
					style={styles.button}
					onPress={this.handleTransaction.bind(this)}
					underlayColor="#88D4F5">
					<View>
						<Text style={styles.buttonText}>SALE</Text>
					</View>
				</TouchableNativeFeedback>
			</View>
		)
	}

	footer(){
		return (
			<View style={styles.footerContainer}>
				<TouchableHighlight
					style={styles.button}
					onPress={this.handleGoToAdd.bind(this)}
					underlayColor="#88D4F5">
					<Text style={styles.buttonText}>Add More Products</Text>
				</TouchableHighlight>
			</View>
		)
	}

	render(){
		return (
			<View style={styles.container}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderRow.bind(this)} />
				{this.footer()}
			</View>
		)
	}
	
}

module.exports = Inventory;