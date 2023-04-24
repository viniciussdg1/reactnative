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
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoParams } from '../../navigations/perfil';

  
export interface ScreenProps {
    route: RouteProp<NavegacaoParams, "PerfilPage">
}



export default function PerfilPage(props: any) {


    type navProp = StackNavigationProp<NavegacaoParams, "PerfilPage">;
    const navigation = useNavigation<navProp>();
    


  return (
    <View style={styles.container}>
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