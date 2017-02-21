/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { StyleSheet, View, StatusBar, Image, ScrollView, Text} from 'react-native';
 import BarraNavegacao from './BarraNavegacao';

 const imgDetalheCliente = require('../imgs/detalhe_cliente.png');
 const imgCliente1 = require('../imgs/cliente1.png');
 const imgCliente2 = require('../imgs/cliente2.png');

 export default class CenaClientes extends Component {
  render() {
    return (
     <ScrollView>
     <StatusBar
     //hidden true ou false
     backgroundColor = '#CCC'
     />

     <BarraNavegacao voltar navigator={this.props.navigator}/>

     <View>
       <View style={ styles.titulo }>
         <Image source={imgDetalheCliente} />
         <Text style={ styles.txtTitulo }>Nossos Clientes</Text>
       </View>
       <View style={ styles.clientes }>
         <Image source={imgCliente1} />
         <Text style={ styles.txtCliente }>Lorem ipsum pegou</Text>
       </View>
       <View style={ styles.clientes }>
         <Image source={imgCliente2} />
         <Text style={ styles.txtCliente }>Lorem ipsum birls loc</Text>
       </View>
     </View>

     </ScrollView>
     );
  }
}

const styles = StyleSheet.create({
    titulo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20
    },
    txtTitulo: {
      color: '#B9C941',
      fontSize: 30,
      fontWeight: 'bold',
      paddingLeft: 15
    },
    clientes: {
      margin: 20
    },
    txtCliente: {
      //fontWeight: 'bold',
      paddingLeft: 15,
      paddingTop: 10,
      fontSize: 18
    }
});
