import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaSobreJogo from './src/components/CenaSobreJogo';
import CenaOutrosJogos from './src/components/CenaOutrosJogos';
import CenaResultado from './src/components/CenaResultado';

export default class app6 extends Component {
  render() {
    return (
      <Router sceneStyle={{paddingTop: 50}}>
        <Scene key='home' component={CenaPrincipal} initial title='Cara ou coroa'/>
        <Scene key='sobrejogo' component={CenaSobreJogo} title='Sobre o Jogo'/>
        <Scene key='outrosjogos' component={CenaOutrosJogos} title='Outros Jogos'/>
        <Scene key='resultado' component={CenaResultado} title='Resultado'/>
      </Router>
    );
  }
}

AppRegistry.registerComponent('app6', () => app6);
