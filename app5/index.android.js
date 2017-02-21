/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

export default class app5 extends Component {
  render() {
    return (
      <Navigator 
        initialRoute={{ id: 'Home' }}
        renderScene={ (route, navigator) => {
          /*Definir a cena com base na rota*/
          switch (route.id){
              case 'Home':
                  return (<CenaPrincipal navigator={navigator}/>);
              
              case 'Clientes':
                  return (<CenaClientes navigator={navigator}/>);
              
              case 'Contatos':
                  return (<CenaContatos navigator={navigator}/>);
              
              case 'Empresa':
                  return (<CenaEmpresa navigator={navigator}/>);
              
              case 'Servicos':
                  return (<CenaServicos navigator={navigator}/>);
              
              default:
                  return false;
          }
        }}
      /> 
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
