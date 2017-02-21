/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { StyleSheet, View, StatusBar, Image, ScrollView, Text} from 'react-native';
 import BarraNavegacao from './BarraNavegacao';

 const imgServico = require('../imgs/detalhe_servico.png');

 export default class CenaServicos extends Component {
  render() {
    return (
     <ScrollView style={{flex: 1, backgroundColor:'#FFF'}}>
     <StatusBar
     //hidden true ou false
     backgroundColor = '#19D1C8'
     />

     <BarraNavegacao voltar navigator={this.props.navigator} corFundo='#19D1C8'/>
   
     <View>
       <View style={ styles.titulo }>
         <Image source={imgServico} />
         <Text style={ styles.txtTitulo }>Nossos Serviços</Text>
       </View>
      <View style={styles.Servicos}>
        <Text style={styles.txtServico}>-Consultoria</Text>
        <Text style={styles.txtServico}>-Processos</Text>
        <Text style={styles.txtServico}>-Acompanhamento de projetos</Text>
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
      color: '#19D1C8',
      fontSize: 30,
      fontWeight: 'bold',
      paddingLeft: 15,
      //paddingBottom: 35
    },
   Servicos: {
    marginLeft: 15,
    marginTop: 20
   },
   txtServico: {
    fontSize: 16
   }
});
