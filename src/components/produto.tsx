import { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export interface ProdutoProps {
    texto: string;
    onPress():void;
    cor?:string;
}

function Produto(props: ProdutoProps) {
    return (
    <>   
      <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.botaoContainer, {backgroundColor: props.cor}]}>
        <Text style={styles.botaoTexto}>{props.texto}</Text>
        </View>
      </TouchableOpacity>
    </>
    )
}
export default memo(Produto);

Produto.defaultProps = {
    cor:'tomato'
}


const styles = StyleSheet.create({
    botaoContainer: {
      borderRadius: 10,
      padding: 10
    },
    botaoTexto: {
      color: 'white'
    }
});
  