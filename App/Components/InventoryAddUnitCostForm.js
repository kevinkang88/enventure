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
	}
});

class InventoryAddUnitCostForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inventory: [
				{
					name: 'Poa Stove',
					unitCost: '0'
				},
				{
					name: 'Queen Solar Panels',
					unitCost: '0'
				}
			]
		}
	}

	handleChange(event){
		console.log(event);
		console.log("Changing cost");

		this.setState({
			inventory: [
				{
					name: 'Poa Stove',
					unitCost: event.nativeEvent.text
				},
				{
					name: 'Queen Solar Panels',
					unitCost: event.nativeEvent.text
				}

			]
		})

	}

	handleNext(){
		console.log('Saving Cost....')
	}

	render (){

		var list = this.state.inventory.map((item, index) => {
			var desc = item.name ? <Text style={styles.productName}> {item.name}</Text> :
				<View/>;

			return (
				<View key={index}>

					<View style={styles.formContainer}>
						{desc}
						<TextInput style={styles.productCost}
						           value={item.unitCost}
						           placeholder='0'
						           onChange={this.handleChange.bind(this)}
						/>
					</View>
				</View>
			)
		});

		return (
			<View style={styles.container}>
				<Text style={styles.header}>Enter Your Unit Cost</Text>
				<Form ref="form">
					{list}
				</Form>
			</View>
		)
	}




}

module.exports = InventoryAddUnitCostForm;