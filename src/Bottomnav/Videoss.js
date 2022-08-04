import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export class Videoss extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.cartText}> Videos</Text>
      </View>
    )
  }
}

export default Videoss

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

