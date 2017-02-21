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
          if(route.id === 'Home'){
            return (<CenaPrincipal navigator={navigator}/>);
          }
          if(route.id === 'Clientes'){
            return (<CenaClientes navigator={navigator}/>);
          }
          if(route.id === 'Contatos'){
            return (<CenaContatos navigator={navigator}/>);
          }
          if(route.id === 'Empresa'){
            return (<CenaEmpresa navigator={navigator}/>);
          }
          if(route.id === 'Servicos'){
            return (<CenaServicos navigator={navigator}/>);
          }
        }}
      /> 
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
