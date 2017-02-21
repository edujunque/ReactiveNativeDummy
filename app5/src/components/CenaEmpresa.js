/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { StyleSheet, View, StatusBar, Image, ScrollView, Text} from 'react-native';
 import BarraNavegacao from './BarraNavegacao';

 const imgEmpresa = require('../imgs/detalhe_empresa.png');

 export default class CenaEmpresa extends Component {
  render() {
    return (
     <ScrollView style={{flex: 1, backgroundColor:'#FFF'}}>
     <StatusBar
     //hidden true ou false
     backgroundColor = '#EC7148'
     />

     <BarraNavegacao voltar navigator={this.props.navigator} corFundo='#EC7148'/>
  
     <View>
       <View style={ styles.titulo }>
         <Image source={imgEmpresa} />
         <Text style={ styles.txtTitulo }>A Empresa</Text>
       </View>
      <View style={styles.Empresa}>
        <Text style={styles.txtEmpresa}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            In varius mollis lectus, ac ornare tellus. Sed semper justo diam, 
            id dignissim turpis interdum nec.
        </Text>
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
      color: '#EC7148',
      fontSize: 30,
      fontWeight: 'bold',
      paddingLeft: 15,
      //paddingBottom: 35
    },
   Empresa: {
    marginLeft: 15,
    marginTop: 20
   },
   txtEmpresa: {
    fontSize: 16,
    paddingTop: 25
   }
});
