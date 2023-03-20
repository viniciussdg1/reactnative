import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Botao() {
     return ( 
     <TouchableOpacity onPress={() => console.log("Clicou!")}>
        <View style={styles.botaoContainer}>
            <Text style={styles.botaoTexto}>Botão</Text>
        </View>
    </TouchableOpacity>)
}


const styles = StyleSheet.create({
    botaoContainer: {
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10
    },
    botaoTexto: {
        color: 'blue'
    }
});
