/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Image, ScrollView} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const imglogo = require('../imgs/logo.png');
const imgMenuCliente = require('../imgs/menu_cliente.png');
const imgMenuContato = require('../imgs/menu_contato.png');
const imgMenuEmpresa = require('../imgs/menu_empresa.png');
const imgMenuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
	  <ScrollView>
        <StatusBar
          //hidden true ou false
          backgroundColor = '#CCC'
        />

        <BarraNavegacao />
        
        <View style={ styles.logo }>
        	<Image  source={imglogo} />
        </View>
        <View style={ styles.viewBotoes }>
	        <Image style={ styles.botoes }  source={imgMenuCliente} />
	        <Image style={ styles.botoes } source={imgMenuContato} />
         </View>	
	     <View style={ styles.viewBotoes }>
	        <Image style={ styles.botoes } source={imgMenuEmpresa} />
	        <Image style={ styles.botoes } source={imgMenuServico} />
       	 </View>
        
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
 	logo:{
 		alignItems: 'center',
 		marginTop: 30
 	},
 	viewBotoes: {
 		flexDirection: 'row',
 		justifyContent: 'center',
 	},
 	botoes: {
 		margin: 15
 	}
});
