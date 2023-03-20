import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Cadastro from '../screens/cadastrar/cadastro';
import Home from '../screens/home/home'
import LoginPage from '../screens/login/login';

export type NavegacaoPrincipalParams = {
    Cadastro: any,
    Login: any,
    Home: any
}

const Stack = createStackNavigator<NavegacaoPrincipalParams>();


export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Cadastro" component={Cadastro}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Login" component={LoginPage}/>
        </Stack.Navigator>
    </NavigationContainer>
)