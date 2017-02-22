import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import CenaPrincipal from './components/CenaPrincipal';
import CenaSobreJogo from './components/CenaSobreJogo';
import CenaOutrosJogos from './components/CenaOutrosJogos';
import CenaResultado from './components/CenaResultado';

const Rotas = () => (
	<Router sceneStyle={{paddingTop: 50}}>
	    <Scene key='home' component={CenaPrincipal} initial title='Cara ou coroa'/>
	    <Scene key='sobrejogo' component={CenaSobreJogo} title='Sobre o Jogo'/>
	    <Scene key='outrosjogos' component={CenaOutrosJogos} title='Outros Jogos'/>
	    <Scene key='resultado' component={CenaResultado} title='Resultado'/>
	</Router>
	);

export default Rotas;
