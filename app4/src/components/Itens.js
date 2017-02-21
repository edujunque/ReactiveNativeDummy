/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { Text, View, Image, StyleSheet } from 'react-native';
 
 const styles = StyleSheet.create({
 	conteudo: {
 		flexDirection: 'row'
 	},
 	titulo: {
 		fontSize: 20,
 		textAlign: 'center',
 		padding: 10,
 		color: 'blue'
 	},
 	imagem: {
 		paddingRight: 10,
 		paddingLeft: 5,
 		paddingBottom: 5,
 		marginRight: 15,
 		width: 102,
 		height: 102
 	},
 	principal: {
 		borderBottomColor: 'cornflowerblue',
 		borderBottomWidth: 0.5,
 		marginBottom: 5,
 		paddingBottom: 10
 	},
 	txtValor: {
 		fontWeight: 'bold',
 		fontSize: 17
 	},
 	txtDetalhes: {
 		fontSize: 16
 	}
 });

 export default class Itens extends Component {
 	render() {
 		return (
 			<View style={ styles.principal }>
	 			<View>
	 				<Text style={ styles.titulo }>{this.props.item.titulo}</Text>
		 		</View>
		 		
		 		<View style={ styles.conteudo }>
			 		<View style={ styles.imagem }>
			 			<Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto.replace('https','http') }} />
			 		</View>
			 		
			 		<View>
			 			<Text style={ styles.txtValor }>R$ {this.props.item.valor}</Text>
			 			<Text style={ styles.txtDetalhes }>Local: {this.props.item.local_anuncio}</Text>
			 			<Text style={ styles.txtDetalhes }>Publicado em: {this.props.item.data_publicacao}</Text>
		 			</View>
	 			</View>
 			</View>
	 		);
 		}	
 	}


