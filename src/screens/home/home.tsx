import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, Text, View, ScrollView, Button, ToastAndroid, TextInput, Alert} from "react-native";
import { Image } from 'react-native';
import Produtos from "../../components/componenttest";
import { NavegacaoParams } from "../../navigations/categorias";
import { useRef } from "react";
import { Modalize } from "react-native-modalize";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export interface ScreenProps {
    route: RouteProp<NavegacaoParams, "Home">
}

export default function Home(props: any) {

    type navProp = StackNavigationProp<NavegacaoParams, "Home">;
    const navigation = useNavigation<navProp>();
    const modal = useRef<Modalize>();

    const confirmaCompra = () => {
      ToastAndroid.show('Compra realizada', ToastAndroid.LONG);
      modal.current?.close();
    }


    const abrir = () => {
      try {
        modal.current?.open();
      } catch (erro) {
        console.log(erro)
      }
    }


    const imagens = ['../../assets/imgs/RTX3080.jpg', '../../assets/imgs/corei5.jpg', '../../assets/imgs/RX6700xt.jpg', '../../assets/imgs/aorus.jpg' ];
    const preço = ['R$4.140,90', "R$1.640,90", "R$3.120,90", "R$1.880,90"];


     return (
        <>
            {/* <View style={styles.container}>
                <Image source={require('../../assets/imgs/logo.png')} style={{ width: 200, height: 200, alignSelf: 'center' }}/>
                <Text>Tela 1</Text>
            </View> */}
        <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Produtos img={require('../../assets/imgs/RTX3080.jpg')} cost="R$4.140,90" onClick={abrir}>
            RTX 3080
          </Produtos>
          <Produtos img={require('../../assets/imgs/corei5.jpg')} cost="R$1.640,90" onClick={abrir}>
            Core i5 12600k
          </Produtos>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Produtos img={require('../../assets/imgs/RX6700xt.jpg')} cost="R$3.120,90" onClick={abrir}>
            RX 6700 xt
          </Produtos>
          <Produtos img={require('../../assets/imgs/aorus.jpg')} cost="R$1.880,90" onClick={abrir}>
            Aorus B660
          </Produtos>  
        </View>

      </ScrollView>
      <GestureHandlerRootView style={styles.container}>

      <Modalize 
        ref={modal}
        modalHeight={200}
      >
        <View style={{padding: 10}}>
          <Text>Compra de Produto</Text>
          <TextInput placeholder='Digite seu endereço'/>
          <View style={{flexDirection: 'row'}}>
            <Button title="BOLETO" onPress={confirmaCompra}/>
            <Button title="PIX"  onPress={confirmaCompra}/>
            <Button title="CARTÃO"  onPress={confirmaCompra}/>
          </View>

          <Button title="Cancelar" color="tomato" onPress={() => {
            Alert.alert('Cancelar', 'Deseja realmente cancelar a compra?', [
              { text: 'Sim', onPress: ()=> modal.current?.close()},
              { text: 'Não'}
            ])  
            
          }} />
        </View>
      </Modalize>
    </GestureHandlerRootView>
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
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line:{
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,
    }
});
