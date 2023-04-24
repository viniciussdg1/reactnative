import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../screens/login/login';
import Cadastro from '../screens/cadastrar/cadastro';
import PerfilPage from '../screens/perfil/perfil';
import Home from '../screens/home/home';

export type NavegacaoParams = {
    Cadastro: any,
    Login: any,
    Perfil: any,
    Home: any,
    PerfilPage: any,
}

const Stack = createStackNavigator<NavegacaoParams>();


export function Perfil() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Perfil" component={PerfilPage} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}