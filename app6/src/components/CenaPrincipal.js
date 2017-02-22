/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

const imgLogo = require('../imgs/logo.png');
const imgBtnJogar = require('../imgs/botao_jogar.png');
const imgSobreJogo = require('../imgs/sobre_jogo.png');
const imgOutrosJogos = require('../imgs/outros_jogos.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View style={styles.principal}>
        <View style={styles.logo}>
          <Image source={imgLogo}/>
          <TouchableHighlight onPress={() => {Actions.resultado(); }}>
            <Image source={imgBtnJogar}/>
          </TouchableHighlight>
        </View>
        <View style={styles.rodape}>
        <TouchableHighlight 
          onPress={() => { Actions.sobrejogo(); }}>
          <Image source={imgSobreJogo}/>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {Actions.outrosjogos(); }}>
          <Image source={imgOutrosJogos}/>
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  logo:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 10
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  }
});
