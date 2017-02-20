/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  AppRegistry,  StyleSheet,  Text,  View, Button, Image} from 'react-native';


class app3 extends Component{

  constructor(props){
    super(props);

    this.state = { escolhaUsuario : '',
                   escolhaComputador : '',
                   resultado : ''}
  }

  jokenpo(escolhaUsuario){
    
    //cria array com opções do PC
    var escolhaPC = Array();
    escolhaPC[0] = 'Pedra';
    escolhaPC[1] = 'Papel';
    escolhaPC[2] = 'Tesoura';

    //Gera numero aleatório
    var opcaoPC = escolhaPC [Math.floor(Math.random() * 3)];
    //Seta State da escolha do PC
  
    var resultado = '';
    if((opcaoPC == 'Pedra') && (escolhaUsuario == 'Pedra')){
        resultado = 'Empate';
    }else if((opcaoPC == 'Pedra') && (escolhaUsuario == 'Papel')){
        resultado = 'Você ganhou';
    }else if((opcaoPC == 'Pedra') && (escolhaUsuario == 'Tesoura')){
        resultado = 'Você perdeu';
    }else if((opcaoPC == 'Papel') && (escolhaUsuario == 'Pedra')){
        resultado = 'Você perdeu';
    }else if((opcaoPC == 'Papel') && (escolhaUsuario == 'Papel')){
        resultado = 'Empate';
    }else if((opcaoPC == 'Papel') && (escolhaUsuario == 'Tesoura')){
        resultado = 'Você ganhou';
    }else if((opcaoPC == 'Tesoura') && (escolhaUsuario == 'Pedra')){
        resultado = 'Você ganhou';
    }else if((opcaoPC == 'Tesoura') && (escolhaUsuario == 'Papel')){
        resultado = 'Você perdeu';
    }else if((opcaoPC == 'Tesoura') && (escolhaUsuario == 'Tesoura')){
        resultado = 'Empate';
    }

  this.setState({ escolhaComputador : opcaoPC,
                  escolhaUsuario : escolhaUsuario,
                  resultado : resultado
                 }); 

  }

  render(){
    return(
        <View>
          <Topo></Topo>
          
          <View style={ styles.painelAcoes }>   
            <View style={ styles.btnEscolha }>
              <Button title='Pedra' onPress={() => {this.jokenpo('Pedra')}}/>
            </View>
            <View style={ styles.btnEscolha }>
              <Button title='Papel' onPress={() => {this.jokenpo('Papel')}}/>
            </View>
            <View style={ styles.btnEscolha }>
              <Button title='Tesoura'onPress={() => {this.jokenpo('Tesoura')}}/>
            </View>
          </View>
          
          <View style={ styles.palcoDoJogo }>
            <Text style={ styles.txtResultado }>{ this.state.resultado }</Text>
            <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
            <Icone escolha={this.state.escolhaUsuario} jogador='Usuario'></Icone>
          </View>
        </View>
        
      );
  }
}

  class Topo extends Component{
    render(){
      return (
           <View>
            <Image source = {require('./imgs/jokenpo.png')} />
           </View>
        );
    }
  }

  class Icone extends Component{
    render(){
      //this.props.escolha
      //this.props.jogador

      if(this.props.escolha == 'Pedra'){
        return (
          <View style={ styles.icone }>
            <Text style={ styles.txtJogador }>{this.props.jogador}</Text>
            <Image source = {require('./imgs/pedra.png')} />
          </View>
          );
      }else if(this.props.escolha == 'Papel'){
       return (
        <View style={ styles.icone }>
            <Text style={ styles.txtJogador }>{this.props.jogador}</Text>
            <Image source = {require('./imgs/papel.png')} />
          </View>
        );
     }else if(this.props.escolha == 'Tesoura'){
       return (
        <View style={ styles.icone }>
            <Text style={ styles.txtJogador }>{this.props.jogador}</Text>
            <Image source = {require('./imgs/tesoura.png')} />
          </View>
        );
     }else {
      return false
    }


  }
}


const styles = StyleSheet.create({
  btnEscolha: {
    width: 90,
    margin: 15
  },
  painelAcoes: {
    justifyContent: 'center',
    flexDirection : 'row'
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
  },
  icone: {
    alignItems: 'center',
    marginBottom: 20
  },
  txtJogador: {
    fontSize: 18
  }
});

AppRegistry.registerComponent('app3', () => app3);
