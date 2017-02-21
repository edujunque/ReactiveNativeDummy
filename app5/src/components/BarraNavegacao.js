/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet,  Text,  View, Image, TouchableHighlight} from 'react-native';

const imgVoltar = require('../imgs/btn_voltar.png')

export default class BarraNavegacao extends Component {
  render() {
  	if(this.props.voltar){
  		return (
  			<View style={ styles.barraTitulo }>
	  			<TouchableHighlight onPress={() => {
        		this.props.navigator.pop();
        	}}>
	  				<Image source={imgVoltar}/>
	  			</TouchableHighlight>
  				<Text style={ styles.titulo }>ATM Consultoria</Text>
  			</View>
  			);
  	} else {
  		return (
  			<View style={ styles.barraTitulo }>
  				<Text style={ styles.titulo }>ATM Consultoria</Text>
  			</View>
  			);
  	}

  }
}

const styles = StyleSheet.create({
 	barraTitulo: {
 		backgroundColor: '#CCC',
 		padding:10,
 		height: 60,
 		flexDirection: 'row'
 	},
 	titulo: {
 		flex: 1,
 		fontSize: 18,
 		color: '#000',
 		textAlign: 'center'
 	},
 	btnVoltar: {

 	}
});
