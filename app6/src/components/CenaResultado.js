/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, Image} from 'react-native';

const imgCara = require('../imgs/moeda_cara.png');
const imgCaroa = require('../imgs/moeda_coroa.png');

export default class CenaResultado extends Component {
 constructor(props){
      super(props);
      this.state = { resultado: '' };
    }

    componentWillMount() {
      const numAleatorio = Math.floor(Math.random() * 2);
      var caraOuCoroa = '';

      if(numAleatorio === 0){
        caraOuCoroa = 'cara';
      } else {
        caraOuCoroa = 'coroa';
      }
      this.setState({resultado: caraOuCoroa});
    }

  render() {
     if(this.state.resultado === 'cara'){
       return (
            <View style={styles.resultado}>
             <Image source={imgCara} />
            </View>
          );
     } else {
         return (
            <View style={styles.resultado}>
             <Image source={imgCaroa} /> 
           </View>
          );
        }
     }
  
  }

const styles = StyleSheet.create({
  resultado: {
    flex: 1,
    backgroundColor: '#61BD8C',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
