/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';

class app3 extends Component {

  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '',
                   escolhaComputador: '',
                   resultado: '' };
  }

  jokenpo(escolhaUsuario) {
    //cria array com opções do PC
    const escolhaPC = ['Pedra', 'Papel', 'Tesoura'];
   // escolhaPC[0] = 'Pedra';
   // escolhaPC[1] = 'Papel';
   // escolhaPC[2] = 'Tesoura';

    //Gera numero aleatório
    const opcaoPC = escolhaPC[Math.floor(Math.random() * 3)];
    //Seta State da escolha do PC
  
    let resultado = '';
    if ((opcaoPC === 'Pedra') && (escolhaUsuario === 'Pedra')) {
        resultado = 'Empate';
    } else if ((opcaoPC === 'Pedra') && (escolhaUsuario === 'Papel')) {
        resultado = 'Você ganhou';
    } else if ((opcaoPC === 'Pedra') && (escolhaUsuario === 'Tesoura')) {
        resultado = 'Você perdeu';
    } else if ((opcaoPC === 'Papel') && (escolhaUsuario === 'Pedra')) {
        resultado = 'Você perdeu';
    } else if ((opcaoPC === 'Papel') && (escolhaUsuario === 'Papel')) {
        resultado = 'Empate';
    } else if ((opcaoPC === 'Papel') && (escolhaUsuario === 'Tesoura')) {
        resultado = 'Você ganhou';
    } else if ((opcaoPC === 'Tesoura') && (escolhaUsuario === 'Pedra')) {
        resultado = 'Você ganhou';
    } else if ((opcaoPC === 'Tesoura') && (escolhaUsuario === 'Papel')) {
        resultado = 'Você perdeu';
    } else if ((opcaoPC === 'Tesoura') && (escolhaUsuario === 'Tesoura')) {
        resultado = 'Empate';
    }

  this.setState({ escolhaComputador: opcaoPC, escolhaUsuario, resultado }); 
  }

  render() {
    return (
        <View>
          <Topo />
          
          <View style={styles.painelAcoes}>   
            <View style={styles.btnEscolha}>
              <Button title='Pedra' onPress={() => { this.jokenpo('Pedra'); }} />
            </View>
            <View style={styles.btnEscolha}>
              <Button title='Papel' onPress={() => { this.jokenpo('Papel'); }} />
            </View>
            <View style={styles.btnEscolha}>
              <Button title='Tesoura'onPress={() => { this.jokenpo('Tesoura'); }} />
            </View>
          </View>
          
          <View style={styles.palcoDoJogo}>
            <Text style={styles.txtResultado}>{ this.state.resultado }</Text>
            <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
            <Icone escolha={this.state.escolhaUsuario} jogador='Usuario' />
          </View>
        </View>
        
      );
  }
}


const styles = StyleSheet.create({
  btnEscolha: {
    width: 90,
    margin: 15
  },
  painelAcoes: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  palcoDoJogo: {
    alignItems: 'center'
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10
    //height: 60
  }
});

AppRegistry.registerComponent('app3', () => app3);
