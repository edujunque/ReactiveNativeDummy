/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { StyleSheet, View, StatusBar, Image, ScrollView, Text} from 'react-native';
 import BarraNavegacao from './BarraNavegacao';

 const imgContato = require('../imgs/detalhe_contato.png');

 export default class CenaEmpresa extends Component {
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
         <Image source={imgContato} />
         <Text style={ styles.txtTitulo }>Contatos</Text>
       </View>
      <View style={styles.Contatos}>
        <Text style={styles.txtContato}>TEL: (11)1234-1234</Text>
        <Text style={styles.txtContato}>CEL: (11)91234-1234</Text>
        <Text style={styles.txtContato}>EMAIL: contato@atmconsultoria.com.br</Text>
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
      color: '#61BD8C',
      fontSize: 30,
      fontWeight: 'bold',
      paddingLeft: 15,
      paddingBottom: 35
    },
   Contatos: {
    marginLeft: 15,
    marginTop: 20
   },
   txtContato: {
    fontSize: 16
   }
});
