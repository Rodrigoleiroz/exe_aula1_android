import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Button } from 'react-native';


export default function App() {
  const [matricula, setMatricula] = useState('');
  const matInteiro = () => {
    setMatricula(parseInt(matricula))
  }
  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');  
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  const showAlert = () => {
    window.alert('Seu cadastro foi realizado com sucesso!');    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>Cursos Online Six Eyes</Text>      

      <Image
        style={styles.imagem}
        resizeMode='stretch'
        source={require('./images/grunge-eye-3.png')}
      />

      <Text style={styles.display1}>Cadastramento de Clientes</Text>

      <Text style={styles.display2}>Matrícula </Text>
      <TextInput
        style={styles.matricula}
        value={matricula}
        onChangeText={(texto) => setMatricula(texto)}
        keyboardType="numeric"
      />

      <Text style={styles.display3}>Nome</Text>
      <TextInput
        style={styles.nome}
        value={nome}
        onChangeText={(texto) => setNome(texto)}
      />
      <Text style={styles.display4}>Cep </Text>
      <TextInput
        style={styles.cep}
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        keyboardType="numeric"
      />

      <Text style={styles.display5}>Endereco</Text>
      <TextInput
        style={styles.endereco}
        value={endereco}
        onChangeText={(texto) => setEndereco(texto)}
      />

      <Text style={styles.display6}>Numero </Text>
      <TextInput
        style={styles.numero}
        value={numero}
        onChangeText={(texto) => setNumero(texto)}
        keyboardType="numeric"
      />

      <Text style={styles.display7}>Bairro </Text>
      <TextInput
        style={styles.bairro}
        value={bairro}
        onChangeText={(texto) => setBairro(texto)}
      />
      
      <Text style={styles.display8}>Cidade </Text>
      <TextInput
        style={styles.cidade}
        value={cidade}
        onChangeText={(texto) => setCidade(texto)}
      />

      <Text style={styles.display9}>Uf </Text>
      <TextInput
        style={styles.uf}
        value={uf}
        onChangeText={(texto) => setUf(texto)}
      />

      <Button
        title="EXIBIR MENSAGEM"
        onPress={showAlert}
      />

      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}></Text>
      </ScrollView>

      <StatusBar style='auto' />
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
    marginLeft: 30,
    fontSize: 33,
  },
  display1: {
    marginLeft: 50,
    fontSize: 20,
  },
  matricula: {
    marginTop: 1,
    width: 100,
    height: 20,
    backgroundColor: '#FFF',
    borderWidth: 1,
    marginLeft: 10,
    padding: 2,
  },
  nome: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    width: 350,
    height: 20,
    marginLeft: 10,
    marginTop: 10,
    padding: 2,
  },
  cep: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    width: 100,
    height: 20,
    marginLeft: 10,
    padding: 2,
  },
  endereco: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    width: 350,
    height: 20,
    marginLeft: 10,
    marginTop: 10,
    padding: 2,
  },
  numero: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    width: 50,
    height: 20,
    marginLeft: 10,
    padding: 2,
  },
  bairro: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    width: 150,
    height: 20,
    marginLeft: 10,
    padding: 2,
  },
  
  cidade: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    width: 150,
    height: 20,
    marginLeft: 10,
    padding: 2,
  },
  uf: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    width: 50,
    height: 20,
    marginLeft: 10,
    padding: 2,
    marginBottom: 20,
  },
  imagem: {
    width: 280,
    height: 200,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10,    
  },
  scrollView: {
    flex: 1,
  },
  text: {},
});
