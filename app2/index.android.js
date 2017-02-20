//Imports
import React from 'react';
import {AppRegistry, View, Image, Text } from 'react-native';

//Formatações
const Estilos = {
  principal: {
    paddingTop: 40
  },
  imagem: {
    justifyContent: 'flex-start',
    padding: 5,
  }
};

//Criar o componente
const App = () => {
  const { principal, imagem } = Estilos;

  return (
      <View style= { principal }>
        <Image style= { imagem } source={ require('./images/uvas.png') } >
          <Text>Legenda para foto</Text>
        </Image>
      </View>
    );
};

//Renderizar na tela
AppRegistry.registerComponent('app2', () => App);

