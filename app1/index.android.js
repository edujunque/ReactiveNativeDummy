import React from 'react';
import { Text, AppRegistry, View, Button } from 'react-native';

const geraNumeroAleatorio = () => {
  var numeroAleatorio = Math.random();

  numeroAleatorio = Math.floor(numeroAleatorio * 10);

  alert(numeroAleatorio);
}

const App = () => {
  return (
      <View>
        <Text>Gerador de números randomicos!!!</Text>

        <Button
          title="Gerar um numero randomico"
          onPress={geraNumeroAleatorio}
        />
      </View>
    );
};

AppRegistry.registerComponent('app1', () => App );

