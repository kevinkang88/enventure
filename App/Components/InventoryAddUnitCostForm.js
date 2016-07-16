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
	inventoryInput: {
		height: 50,
		flex: 1,
		backgroundColor: '#ebeef0',
		padding: 4,
		marginRight: 5,
		width: 200,
		fontSize: 18,
		borderWidth: 1,
		textAlign: 'center',
		borderColor: 'white',
		borderRadius: 8,
		color: 'cornflowerblue'
	},
});

class InventoryAddUnitCostForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inventory: {
				name: 'Poa Stove',
				unitCost: '0'
			}
		}
	}

	handleChange(event){
		console.log(event);
		console.log("Changing cost");

		this.setState({
			inventory: {
				name: 'Poa Stove',
				unitCost: event.nativeEvent.text
			}
		})

	}

	handleNext(){
		console.log('Saving Cost....')
	}

	render (){
		return (
			<View style={styles.container}>
				<Text style={styles.header}>Enter Your Unit Cost</Text>
				<Form ref="form">
					<View style={styles.formContainer}>
						<Text style={styles.inventoryInput}>{this.state.inventory.name}</Text>
						<TextInput style={styles.inventoryInput}
						           value={this.state.inventory.unitCost}
						           placeholder='0'
						           onChange={this.handleChange.bind(this)}
						/>
					</View>
				</Form>
			</View>
		)
	}




}

module.exports = InventoryAddUnitCostForm;