import { Formik } from 'formik';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native'
import cadastro from '../cadastrar/cadastro';
import { Botao } from '../../components/botao';
import { NavegacaoPrincipalParams } from '../../navigations';
import { StackNavigationProp } from '@react-navigation/stack';

  
export interface ScreenProps {
    route: RouteProp<NavegacaoPrincipalParams, "Login">
}



export default function LoginPage(props: any) {

  const [ resultado, setResultado ] = useState<null|'logado'|'falhou'>(null);
  
  const handleLogin = async ({email, senha}:any) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (email.trim() == 'teste@teste.com' && senha.trim() == '123456') {
      setResultado('logado')
      navigation.navigate('Home')
    }else
      setResultado('falhou')
  }


    type navProp = StackNavigationProp<NavegacaoPrincipalParams, "Cadastro">;
    const navigation = useNavigation<navProp>();
    


  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', senha: ''}}
        validationSchema={Yup.object().shape({
          email: Yup.string().required('Informe o email').email('E-mail não válido'),
          senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa ter 6 caracteres')
        })}
        onSubmit={handleLogin}>
        {({errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <>
            <Image source={require('../../assets/imgs/logo.png')} style={{ width: 200, height: 200, alignSelf: 'center' }}/>
            <Text>Login</Text>
            <TextInput  placeholder='Digite seu email' onBlur={handleBlur('email')} style={styles.textInput} onChangeText={handleChange('email')}/>
            { errors.email && touched.email && <Text style={styles.fail}>{errors.email}</Text>}
            <TextInput  placeholder='Digite sua senha' onBlur={handleBlur('email')} style={styles.textInput} onChangeText={handleChange('senha')} secureTextEntry/>
            { errors.senha && touched.senha && <Text style={styles.fail}>{errors.senha}</Text>}
            <Button title="Entrar" onPress={() => handleSubmit()} disabled={isSubmitting} />

            { resultado == 'logado' && <Text style={styles.success}>Logado com sucesso</Text>}
            { resultado == 'falhou' && <Text style={styles.fail}>Email ou senha incorreto</Text>}
          </>
        )}
      </Formik>
        {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center'
  },
  textInput: {
    backgroundColor: 'lightgrey',
    padding: 2,
    marginVertical: 5
  },
  fail: {
    textAlign:'center',
    color: 'red'
  },
  success: {
    textAlign:'center',
    color: 'green'
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    },
    buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});