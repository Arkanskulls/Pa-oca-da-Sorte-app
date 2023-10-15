import React, { useState }  from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App() {
        const [img, setImg] = useState(require('./src/biscoito.png'));
      return(
          <View style={styles.container}>
              <Image
              source={require('./src/pacoca.png')}
              style={styles.img}
              
              />

              <Text  style={styles.textofrase}>"você gosta de paçoca?"</Text>

                <TouchableOpacity style={styles.botao}  onPress={ () => alert('VOCÊ È AMAVEL S2') }>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>gosto de paçoca</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={[styles.botao, {marginTop: 15}]}  onPress={ () => alert('TVAI TOMA NO SEU CU') }>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>NÃO QUERO!!</Text>
                    </View>

                </TouchableOpacity>
          </View>

      ); 
   
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:230,
        height:230,
    },
    textofrase:{
        fontSize:25,
        color: '#dd0000',
        margin:30,
        fontStyle:"italic",
        textAlign: "center"
    },
    botao:{

        width:230,
        height:58,
        borderColor:'black',
        borderWidth: 2,
        borderRadius: 25
    },
    btnArea:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    },
    btnTexto:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#dd7b33'
    }


})

export default App; 