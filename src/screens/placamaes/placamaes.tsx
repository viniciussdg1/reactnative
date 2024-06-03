import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, Text, View, ScrollView, ToastAndroid, TextInput, Button, Alert} from "react-native";
import { Image } from 'react-native';
import Produtos from "../../components/componenttest";
import { NavegacaoParams } from "../../navigations/categorias";
import { Modalize } from "react-native-modalize";
import { useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export interface ScreenProps {
    route: RouteProp<NavegacaoParams, "Placamaes">
}

export default function Placamaes(props: any) {

    type navProp = StackNavigationProp<NavegacaoParams, "Placamaes">;
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





     return (
        <>
            {/* <View style={styles.container}>
                <Image source={require('../../assets/imgs/logo.png')} style={{ width: 200, height: 200, alignSelf: 'center' }}/>
                <Text>Tela 1</Text>
            </View> */}
        <ScrollView>
        <Text style={styles.text}>Placas Mãe</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Produtos img={require('../../assets/imgs/tuf.jpg')} cost="R$940,90" onClick={abrir}>
            Asus TUF B660
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