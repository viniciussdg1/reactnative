import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import { NavegacaoPrincipalParams } from "../../navigations";
import { Image } from 'react-native';
import Produtos from "../../components/componenttest";


export interface ScreenProps {
    route: RouteProp<NavegacaoPrincipalParams, "Home">
}

export default function Home(props: any) {

    type navProp = StackNavigationProp<NavegacaoPrincipalParams, "Home">;
    const navigation = useNavigation<navProp>();




     return (
        <>
            {/* <View style={styles.container}>
                <Image source={require('../../assets/imgs/logo.png')} style={{ width: 200, height: 200, alignSelf: 'center' }}/>
                <Text>Tela 1</Text>
            </View> */}
        <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Produtos img={require('../../assets/imgs/RTX3080.jpg')} cost="R$4.140,90" onClick={()=> console.log('Clicou')}>
            RTX 3080
          </Produtos>
          <Produtos img={require('../../assets/imgs/RX6800.jpg')} cost="R$3.880,90" onClick={()=> console.log('Clicou') }>
            RX 6800
          </Produtos>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Produtos img={require('../../assets/imgs/RX6700xt.jpg')} cost="R$3.120,90" onClick={()=> alert('CLICOU')}>
            RX 6700 xt
          </Produtos>
          <Produtos img={require('../../assets/imgs/rxt3060ti.jpg')} cost="R$2800,00" onClick={()=> alert('CLICOU')}>
            RTX 3060ti
          </Produtos>
        </View>

      </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        marginBottom: 8
    },
    image:{
        width: '100%'
    },
    textContainer:{
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text:{
        alignItems: 'center',
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line:{
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,
    }
});
