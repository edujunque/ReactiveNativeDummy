/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet,  Text,  View} from 'react-native';

export default class BarraNavegacao extends Component {
  render() {
    return (
    	<View style={ styles.barraTitulo }>
    		<Text>ATM Consultoria</Text>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
 	barraTitulo: {
 		backgroundColor: '#CCC',
 		padding:10,
 		height: 60,
 		justifyContent: 'center',
 		alignItems: 'center'
 	},
 	titulo: {
 		flex: 1,
 		fontSize: 18,
 		color: '#000'
 	}
});
