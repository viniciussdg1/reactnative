import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';

export default function Produtos(props) {

 function filterDesc(desc){
    if(desc.length < 27){
        return desc;
    }

    return `${desc.substring(0, 23)}...`;
 }

 return (
   <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image
        source={props.img}
        style={styles.produtosImg}
      />
      <Text style={styles.shoesText}>
          {filterDesc(props.children)}
      </Text>
      <View opacity={0.4}>
        <Text style={styles.produtoText}> {props.cost} </Text>
      </View>
      <Button title="Comprar" onPress={props.onClick} /> 
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    produtosImg:{
        width: 175,
        height: 175
    },
    produtoText:{
        fontSize: 16
    }
});