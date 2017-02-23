import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, StyleSheet } from 'react-native';

import firebase from 'firebase';

export default class firebaseTeste extends Component {
  

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

  cadastrarUsuario(){
    var email = "edujunque@gmail.com";
    var senha = "dudy123";
    
   const usuario = firebase.auth();
    usuario.createUserWithEmailAndPassword(email, senha)
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (error.code == 'auth/weak-password'){
           alert('Crianço!!! essa senha é horrivel, melhora ela ai pelo menos 6 caracteres');
        }

       
      });
  }

  verificarUsuarioLogado(){
     const usuario = firebase.auth();
     const usuarioAtual = usuario.currentUser;
      usuario.onAuthStateChanged(
        (usuarioAtual) => {
          if( usuarioAtual ){
            alert('Usario logado')
          } else {
            alert('Usario não logado')

          }
        }
      );
  } 

  deslogarUsuario(){
     const usuario = firebase.auth();
      usuario.signOut();
  } 

  logarUsuario(){
    var email = 'edujunque@gmail.com';
    var senha = 'dudy123'
    const usuario = firebase.auth();

    usuario.signInWithEmailAndPassword(email, senha)
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (error.code == 'auth/wrong-password'){
         alert('Crianço!!! essa senha ou email estão erradas');
       }

       
     });
  }

  // salvarDados(){
  //   var funcionarios = firebase.database().ref('funcionarios');
  //   // database.ref('pontuacao').remove();
  //   // funcionarios.child('002').remove();
  //   // funcionarios.child('002').child('idade').set('12');
  //   // funcionarios.push().child('nome').set('Dudy');
  //   funcionarios.push().set (
  //       {
  //         nome: 'Crinaço',
  //         altura: '2,10',
  //         peso: '256'
  //       }
  //     );
    
  // }

  // listarDados(){
  //    var pontuacao = firebase.database().ref('pontuacao');
  //    pontuacao.on('value', (snapshot) => { 
  //       var pontos = snapshot.val();
  //       this.setState({ pontuacao : pontos});
  //     });
  // }

  render() {
    return (
      <View style={styles.botao}>
        <Text>
         
        </Text>
         <Button style={{flex:1}}
            onPress={ () => { this.cadastrarUsuario(); } }
            title= 'Cadastrar usuario'
            color= '#841584'
            accessibilityLabel='Cadastrar usuario'
          />

          <Button style={{flex:1}}
            onPress={ () => { this.verificarUsuarioLogado(); } }
            title= 'Verifica usuario logado'
            color= '#841584'
            accessibilityLabel='Verifica usuario logado'
          />

          <Button style={{flex:1}}
          onPress={ () => { this.deslogarUsuario(); } }
          title= 'Deslogar usuario'
          color= '#841584'
          accessibilityLabel='Deslogar usuario'
          /> 

          <Button style={{flex:1}}
          onPress={ () => { this.logarUsuario(); } }
          title= 'Logar usuario'
          color= '#841584'
          accessibilityLabel='Logar usuario'
          />


      </View>
    );
  }
}

const styles=StyleSheet.create({
 botao: {
  margin: 10,
  //width: 10
  justifyContent: 'space-around',
  flex: 5
 }
});

AppRegistry.registerComponent('firebaseTeste', () => firebaseTeste);
