/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet} from 'react-native';

export default class CenaSobreJogo extends Component {
  render() {
    return (
      <View style={styles.principal}>
        <Text>Texto simplão</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#61BD8C'
  }
});
