import React,{Component} from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';




export default class  Videos extends Component {
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
        marginTop:0,
        backgroundColor:'blue'
       
    },
    cartText:{
        fontSize:24,
        fontWeight:'bold',
        color:'black',
        alignItems:'center',
        justifyContent:'center',
        marginTop:250,
        color:'white'
       
    }
    // textView:{
    //     height: 40,
    //     width:340,
       
    //     borderWidth:1,
    //     padding: 10,
    //     borderColor:'gray'
        

    // }
})