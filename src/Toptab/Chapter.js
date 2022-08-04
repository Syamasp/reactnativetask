import React,{Component} from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'


export default class Chapter extends Component {
    render(){
  return (
    <View style={styles.container}>
       
      <Text style={styles.cartText}>Videos</Text>
    </View>
  )
}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        
        backgroundColor:'blue'
    },
    cartText:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        marginTop:250
    },
   
})