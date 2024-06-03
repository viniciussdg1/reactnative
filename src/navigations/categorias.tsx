import { createStackNavigator } from '@react-navigation/stack';
import Placasdevideo from '../screens/placasdevideo/placasdevideo';
import Fontes from '../screens/fontes/fontes';
import Processadores from '../screens/processadores/processadores';
import Placamaes from '../screens/placamaes/placamaes';
import Memorias from '../screens/memorias/memorias';
import CategoriasPage from '../screens/categorias/categorias';
import { NavigationContainer } from '@react-navigation/native';


export type NavegacaoParams = {
    Home: any,
    Fontes: any,
    Memorias: any,
    Placamaes: any,
    Processadores: any,
    Placasdevideo: any,
    Categoria: any,
    CategoriasPage: any,
}

const Stack = createStackNavigator<NavegacaoParams>();


export function Categorias() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="CategoriasPage" component={CategoriasPage} />
                <Stack.Screen name="Placasdevideo" component={Placasdevideo} />
                <Stack.Screen name="Processadores" component={Processadores} />
                <Stack.Screen name="Placamaes" component={Placamaes} />
                <Stack.Screen name="Memorias" component={Memorias} />
                <Stack.Screen name="Fontes" component={Fontes} />
            </Stack.Navigator>
    )
}