import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Cadastro from '../screens/cadastrar/cadastro';
import Home from '../screens/home/home'
import LoginPage from '../screens/login/login';
import { Categorias } from './categorias';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Perfil } from './perfil';
import { AntDesign } from '@expo/vector-icons'; 
import CategoriasPage from '../screens/categorias/categorias';




// export const NavegacaoPrincipal = () => (
//     <NavigationContainer>
//         <Stack.Navigator>
//             <Stack.Screen name="Cadastro" component={Cadastro}/>
//             <Stack.Screen name="Home" component={Home}/>
//             <Stack.Screen name="Login" component={LoginPage}/>
//         </Stack.Navigator>
//     </NavigationContainer>
// )

const Tab = createBottomTabNavigator();

export function NavegacaoPrincipal() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: 'blue'
            }}>
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarLabel:'Home',
                    tabBarIcon:(btn)=> <MaterialIcons name="home" size={20} color={(btn.focused ? 'blue' : 'black')} />
                }}/>
                {/* AQUI TU ESTAVA PASSANDOA  PAGINA AO INVPÈS DA NAVEGAÇÂO COM OS DEMAIS ITENS */}
                <Tab.Screen name="Categorias" component={Categorias} options={{
                    tabBarLabel:'Categorias',
                    tabBarIcon:(btn)=> <AntDesign name="bars" size={20} color={(btn.focused ? 'blue' : 'black')}  />
                }}/>
                <Tab.Screen name="Perfil" component={Perfil} options={{
                    tabBarLabel:'Perfil',
                    tabBarIcon:(btn)=> <AntDesign name="user" size={20} color={(btn.focused ? 'blue' : 'black')}  />
                }}/>
                <Tab.Screen name="Login" component={LoginPage} options={{
                    tabBarLabel:'Login',
                    tabBarIcon:(btn)=> <MaterialIcons name="settings" size={20} color={(btn.focused ? 'blue' : 'black')}  />
                }}/>
                <Tab.Screen name="Cadastro" component={Cadastro} options={{
                    tabBarLabel:'Cadastro',
                    tabBarIcon:(btn)=> <MaterialIcons name="settings" size={20} color={(btn.focused ? 'blue' : 'black')}  />
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}