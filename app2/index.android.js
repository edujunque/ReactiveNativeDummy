//Imports
import React from 'react';
import {Text, AppRegistry, View, TouchableOpacity } from 'react-native';

//Formatações
const Estilos = {
  /*estiloTexto: {
    fontSize: 20,
    backgroundColor: '#08509B',
    width: 60, 
    height: 60,

    color: '#fff',
    paddingTop: 15,
    textAlign: 'center'
    textDecorationLine: 'underline line-through',
    fontWeight: 'bold' //100 e 900
    fontStyle: 'italic'
    shadowColor: '#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.4
    paddingLeft: 10,
    textAlign: 'center',
  
    flex: 0,
    flexDirection: 'row'
  },*/

  principal: {
    height: 150,
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },

  botao: {
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#1d8eb8',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width:0, height: 2},
    shadowOpacity: 0.4,
    width: 250
  },

  textoBotao:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }

};

const botaoPressionado = () => {
  alert('Botão pressionado');
}

//Criar o componente
const App = () => {
  const { principal, botao, textoBotao } = Estilos;

  return (
      <View style= { principal }>
        
        <TouchableOpacity style= { botao } onPress={ botaoPressionado }>
          <Text style= { textoBotao }>Clique Aqui</Text>
        </TouchableOpacity>
      
      </View>
    );
};

//Renderizar na tela
AppRegistry.registerComponent('app2', () => App);

