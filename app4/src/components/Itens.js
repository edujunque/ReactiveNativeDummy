/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { Text, View, Image } from 'react-native';
 
 const Styles = {
 	conteudo: {
 		flexDirection: 'row'
 	},
 	titulo: {
 		fontSize: 20,
 		textAlign: 'center',
 		marginBottom: 10
 	},
 	imagem: {
 		marginRight: 10,
 		marginLeft: 5,
 		marginBottom: 5
 	},
 	principal: {
 		borderBottomColor: 'cornflowerblue',
 		borderBottomWidth: 1,
 		marginBottom: 5
 	}
 }

 export default class Itens extends Component {
 	render() {
 		return (
 			<View style={ Styles.principal }>
	 			<View>
	 				<Text style={ Styles.titulo }>{this.props.item.titulo}</Text>
		 		</View>
		 		
		 		<View style={ Styles.conteudo }>
			 		<View style={ Styles.imagem }>
			 			<Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto.replace('https','http') }} />
			 		</View>
			 		
			 		<View>
			 			<Text>Valor: {this.props.item.valor}</Text>
			 			<Text>Local: {this.props.item.local_anuncio}</Text>
			 			<Text>Publicado em: {this.props.item.data_publicacao}</Text>
		 			</View>
	 			</View>
 			</View>
	 		);
 		}	
 	}


