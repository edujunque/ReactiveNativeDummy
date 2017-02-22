import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

import firebase from 'firebase';

export default class firebaseTeste extends Component {
  
constructor(props){
  super(props);
  this.state = { pontuacao : 0 }
}

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDloQpo199xsDlwhxCKnbgoHZsW-Qo9t_M",
      authDomain: "configuracaofirebasereac-76261.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-76261.firebaseio.com",
      storageBucket: "configuracaofirebasereac-76261.appspot.com",
      messagingSenderId: "657271504638"
    };
    firebase.initializeApp(config);
  }

  salvarDados(){
    var funcionarios = firebase.database().ref('funcionarios');
    // database.ref('pontuacao').remove();
    // funcionarios.child('002').remove();
    // funcionarios.child('002').child('idade').set('12');
    // funcionarios.push().child('nome').set('Dudy');
    funcionarios.push().set (
        {
          nome: 'Crinaço',
          altura: '2,10',
          peso: '256'
        }
      );
    
  }

  listarDados(){
     var pontuacao = firebase.database().ref('pontuacao');
     pontuacao.on('value', (snapshot) => { 
        var pontos = snapshot.val();
        this.setState({ pontuacao : pontos});
      });
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.pontuacao}
        </Text>
         <Button 
            onPress={ () => { this.salvarDados(); } }
            title= 'Salvar dados'
            color= '#841584'
            accessibilityLabel='Salvar dados'
          />

          <Button 
            onPress={ () => { this.listarDados(); } }
            title= 'Listar dados'
            color= '#841584'
            accessibilityLabel='Listar dados'
          />
      </View>
    );
  }
}

// const styles=StyleSheet.create({
 
// });

AppRegistry.registerComponent('firebaseTeste', () => firebaseTeste);
