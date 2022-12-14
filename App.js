import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { peso: '', altura: '', info: '-', resultado: 0.0 }
    this.calculaIMC = this.calculaIMC.bind(this)
  }

  calculaIMC() {
    let imc = this.state.peso / (this.state.altura * this.state.altura)

    let s = this.state
    s.resultado = imc

    if (s.resultado < 16) {
      s.info = 'Magreza Grave'
    }
    else if (s.resultado > 16 && s.resultado < 17) {
      s.info = 'Magreza Moderada'
    }
    else if (s.resultado > 17 && s.resultado < 18.5) {
      s.info = 'Magreza Leve'
    }
    else if (s.resultado > 18.5 && s.resultado < 25) {
      s.info = 'Saudável'
    }
    else if (s.resultado > 25 && s.resultado < 30) {
      s.info = 'Sobrepeso'
    }
    else if (s.resultado > 30 && s.resultado < 35) {
      s.info = 'Obesidade Grau 1'
    }
    else if (s.resultado > 35 && s.resultado < 40) {
      s.info = 'Obesidade Grau 2 - Severa'
    }
    else if (s.resultado > 40) {
      s.info = 'Obesidade Grau 3 - Mórbida'
    }

    this.setState(s)
  }

  clear = () => {
    this.setState({
      peso: '',
      altura: '',
      resultado: 0.0,
      info: '-'
    })
  }

  render() {
    return (
      <>
        <View style={styles.heder}>
          <Text style={styles.textHeader}>IMC</Text>
        </View>
        <View style={styles.viewContainer}>

          <Text style={styles.textTitleBody}>Calcule o seu IMC</Text>
          <Separator />

          <View style={styles.container}>
            <Text style={styles.text}>Altura (m)</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={altura => this.setState({ altura })}
              value={this.state.altura}
              placeholder='Exemplo: 1.75'
              keyboardType={'numeric'} />
          </View>

          <View style={styles.container}>
            <Text style={styles.text}>Peso (kg)</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={peso => this.setState({ peso })}
              value={this.state.peso}
              placeholder='Exemplo: 68,8'
              keyboardType={'numeric'} />
          </View>

          <Button
            onPress={this.calculaIMC}
            title='Calcula'
            color='green'
            accessibilityLabel='Clique aqui para calcular seu IMC' />
          <Button
            onPress={this.clear}
            title='Limpa'
            color='red'
            accessibilityLabel='Botão para limpar os valores' />

          <View tyle={styles.container}>
            <Text style={styles.textTitleBody}> Resultado </Text>
            <Text style={styles.textTitleBody}>
              {this.state.resultado.toFixed(2)} {this.state.info}
            </Text>
          </View>

        </View>
        <StatusBar style="light" />
      </>
    );
  }
}

const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  heder: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 24,
  },
  textHeader: {
    marginTop: 10,
    fontSize: 24,
    color: 'floralwhite'
  },
  textTitleBody: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
    color: 'darkgray',
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    fontSize: 18,
  },
  textInput: {
    height: 40,
    width: '50%',
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 20,
    margin: 10,
    borderRadius: 20
  },
  buttonView: {
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  }
});
