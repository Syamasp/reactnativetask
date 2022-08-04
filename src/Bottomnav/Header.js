import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.cartText}> Videos </Text>
      </View>
    )
  }
}

export default  Header 

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
})

