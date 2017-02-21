/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  AppRegistry,  StyleSheet,  Text,  View, StatusBar} from 'react-native';

//Importar componente barra de navegação
import BarraNavegacao from './src/components/BarraNavegacao'

export default class app5 extends Component {
  render() {
    return (
      <View>
        <BarraNavegacao />
        <StatusBar
          //hidden
          backgroundColor = '#CCC'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
});

AppRegistry.registerComponent('app5', () => app5);
