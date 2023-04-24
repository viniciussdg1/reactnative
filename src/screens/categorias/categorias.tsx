import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavegacaoParams } from "../../navigations/categorias";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export interface ScreenProps {
    route: RouteProp<NavegacaoParams, "CategoriasPage">
}


export default function CategoriasPage(this: any, props: any) {

    
    type navProp = StackNavigationProp<NavegacaoParams, "CategoriasPage">;
    const navigation = useNavigation<navProp>();


    
    return (
        <View style={styles.container}>
            {/* <Button title="Cadastrar" onPress={() => App('Login')} /> */}
            {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                 <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity> */}
            <>
            <Text>CATEGORIAS</Text>
            </>
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
});