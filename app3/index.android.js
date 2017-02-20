/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MeuComponente extends Component{
  render(){
    return (
        <View>
          <Text>{this.props.prop1}</Text>
          <Text>{this.props.prop2}</Text>
          <Text>{this.props.prop3}</Text>
        </View>
      );
  }
}

class app3 extends Component{

  render(){
    return(
        <MeuComponente prop1='Coisinha bonitinha do pai' prop2='fantas' prop3='um pais da europa' ></MeuComponente>
      );
  }
}

AppRegistry.registerComponent('app3', () => app3);
