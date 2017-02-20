//Imports
import React from 'react';
import {AppRegistry, View, Image, Text, TouchableOpacity, Alert } from 'react-native';

//Formatações
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },

  textoBotao: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }

};

const gerarNovaFrase = () => {
  var numAleatorio = Math.floor(Math.random() * 5);

  //frases
  var frases = Array();
  frases[0] = 'Xablau';
  frases[1] = 'Crianço';
  frases[2] = 'Bozo';
  frases[3] = 'Olá! meu nome é Goku';
  frases[4] = 'Doninha espertinha';

  var fraseEscolhida = frases[numAleatorio];
  Alert.alert(fraseEscolhida);
}

//Criar o componente
const App = () => {
  const { principal, botao, textoBotao } = Estilos;

  return (
      <View style= { principal }>
       <Image source = { require('./images/logo.png') } />
       <TouchableOpacity 
        onPress= { gerarNovaFrase }
        style= { botao }>
         <Text style= { textoBotao }>Nova Frase</Text>
       </TouchableOpacity>
      </View> 
    );
};

//Renderizar na tela
AppRegistry.registerComponent('app2', () => App);

