import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../screens/login/login';
import Cadastro from '../screens/cadastrar/cadastro';
import PerfilPage from '../screens/perfil/perfil';
import Home from '../screens/home/home';
import Placasdevideo from '../screens/placasdevideo/placasdevideo';
import Fontes from '../screens/fontes/fontes';
import Processadores from '../screens/processadores/processadores';
import Placamaes from '../screens/placamaes/placamaes';
import Memorias from '../screens/memorias/memorias';

export type NavegacaoParams = {
    Cadastro: any,
    Login: any,
    Home: any,
    Perfil: any,
    Fontes: any,
    Memorias: any,
    Placamaes: any,
    Processadores: any,
    Placasdevideo: any,
}

const Stack = createStackNavigator<NavegacaoParams>();


export function Perfil() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Perfil" component={PerfilPage} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Placasdevideo" component={Placasdevideo} />
            <Stack.Screen name="Processadores" component={Processadores} />
            <Stack.Screen name="Placamaes" component={Placamaes} />
            <Stack.Screen name="Memorias" component={Memorias} />
            <Stack.Screen name="Fontes" component={Fontes} />
        </Stack.Navigator>
    )
}