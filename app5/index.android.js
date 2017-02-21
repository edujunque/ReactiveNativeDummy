/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import CenaPrincipal from './src/components/CenaPrincipal';

export default class app5 extends Component {
  render() {
    return (
      <CenaPrincipal /> 
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
