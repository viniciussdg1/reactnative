import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import Home from '../home/home';
import LoginPage from '../login/login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { NavegacaoParams } from '../../navigations/perfil';


// function MinhaTela() {
//     const navigation = useNavigation();

//   }

// const App = StackNavigator({
//     Home: { screen: Home },
//     Login: { screen: LoginPage},
//   });

// const Stack = createStackNavigator();
export interface ScreenProps {
    route: RouteProp<NavegacaoParams, "Cadastro">
}


export default function Cadastro(this: any, props: any) {

    const [ resultado, setResultado ] = useState<null|'Cadastrado'|'Error'>(null);


    type navProp = StackNavigationProp<NavegacaoParams, "Cadastro">;
    const navigation = useNavigation<navProp>();


    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Informe o email').email('E-mail não válido'),
        senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa ter 6 caracteres'),
        senha2: Yup.string().required('Informe a senha').min(6, 'A senha precisa ter 6 caracteres'),
        nome: Yup.string().required('Nome obrigatório'),
    });

    const handleCadastro = async ({email, senha, nome, senha2}:any) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (senha == senha2){
            setResultado('Cadastrado');
            navigation.navigate('Login'); 
        } 
        else {
            setResultado('Error');
        }
    }


    return (
        <View style={styles.container}>
            <Formik initialValues={{email: '', senha: '', nome: '', senha2: ''}}
            validationSchema={validationSchema}
            // onSubmit={() => navigation.navigate('Login')}>
            onSubmit={(values) => handleCadastro(values)}>
            {({handleChange, handleSubmit, values, errors, touched }) => (
            <>
                <Image source={require('../../assets/imgs/logo.png')} style={{ width: 200, height: 200, alignSelf: 'center' }}/>
                <Text>Digite seu nome completo</Text>
                <TextInput  placeholder='Nome' style={styles.textInput} onChangeText={handleChange('nome')}/>
                {errors.nome && touched.nome && <Text style={styles.fail}>{errors.nome}</Text>}
                <Text>Digite seu email</Text>
                <TextInput  placeholder='Email' style={styles.textInput} onChangeText={handleChange('email')}/>
                {errors.email && touched.email && <Text style={styles.fail}>{errors.email}</Text>}
                <Text>Digite sua Senha</Text>
                <TextInput  placeholder='Senha'style={styles.textInput} secureTextEntry onChangeText={handleChange('senha')}/>
                {errors.senha && touched.senha && <Text style={styles.fail}>{errors.senha}</Text>}
                <Text>Digite novamente sua Senha</Text>
                <TextInput  placeholder='Digite novamente a senha'style={styles.textInput} secureTextEntry onChangeText={handleChange('senha2')}/>
                {errors.senha2 && touched.senha2 && <Text style={styles.fail}>{errors.senha2}</Text>}
                <Button title="Cadastrar" onPress={() => handleSubmit()} />
                { resultado == 'Cadastrado' && <Text style={styles.success}>Cadastrado com sucesso</Text>}
                { resultado == 'Error' && <Text style={styles.fail}>Dados incorretos</Text>}
            </>
            )}
            </Formik>
            {/* <Button title="Cadastrar" onPress={() => App('Login')} /> */}
            {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                 <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity> */}
        </View>
    )
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
    fail: {
        textAlign:'center',
        color: 'red'
    },
    success: {
        textAlign:'center',
        color: 'green'
    }
});