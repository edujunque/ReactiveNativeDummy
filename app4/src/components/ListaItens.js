/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { Text } from 'react-native';

 export default class ListaItens extends Component {

 	constructor(props) {
 		super(props);
 		console.log('Construindo')
 	}

 	componentWillMount() {
 		console.log('antes de render')	
 	}

 	render() {
 		console.log('é render')
 		return (

 			<Text>Componente teste</Text>
 			);
 	}

 	componentDidMount() {
 		console.log('depois de render')
 	}


 }


