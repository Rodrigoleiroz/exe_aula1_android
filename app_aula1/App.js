import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';

import React, {useState} from 'react';

export default function App() {

  const [matricula, setMatricula] = useState(0)
  const [nome, setNome] = useState(" ")
  
  const matInteiro = () => {
    setMatricula(parseInt(matricula))
  }

  return (
    <View style={styles.container}>

      <Text style = {styles.display}>Six eyes</Text>

      <Text style = {styles.display1}>ENTRADA DE DADOS - TextInput</Text>

      <Text style = {styles.display2}>Matrícula </Text>
      <TextInput
        style = {styles.matricula}
        value = {String(matricula)}
        onChangeText = {(texto) => (setMatricula(texto))}>
      </TextInput>

      <Text style = {styles.display3}>Nome</Text>
      <TextInput
        style = {styles.nome}
        value = {String(nome)}
        onChangeText = {(texto) => (setNome(texto))}>

      <Text style = {styles.display4}>Endereco</Text>
      <TextInput
        style = {styles.endereco}
        value = {String(endereco)}
        onChangeText = {(texto) => (setEndereco(texto))}>
      </TextInput>

      <Text style = {styles.display5}>Numero </Text>
      <TextInput
        style = {styles.numero}
        value = {String(numero)}
        onChangeText = {(texto) => (setNumero(texto))}>
      </TextInput>

      <Image style = {styles.imagem}
        resizeMode = 'stretch'
        source = {require('./images/grunge-eye-3.png')}
      />

      <ScrollView style = {styles.ScrollView} >
        <Text style={styles.text}>
          
        </Text>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    marginTop: 20,
    justifyContent: 'center',
  },

  display: {
    margin: 10,
    marginLeft: 20,
  },
  display1: {
    marginLeft: 60,
  },
  matricula: {
    backgroundColor: '#FFF',
    borderEndWidth: 1,
    marginLeft: 10,
    padding: 2,
  },
  nome: {
    backgroundColor: '#FFF',
    borderEndWidth: 1,
    marginLeft: 10,
    marginTop: 10,
    padding: 2,
  },
  endereco: {
    backgroundColor: '#FFF',
    borderEndWidth: 1,
    marginLeft: 10,
    marginTop: 10,
    padding: 2,
  },
  numero: {
    backgroundColor: '#FFF',
    borderEndWidth: 1,
    marginLeft: 10,
    padding: 2,
  },

  imagem: {
    width: 170,
    height: 200,
    marginLeft: 90,
    marginTop: 10,
  }
});
