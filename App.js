import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, TextInput, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


import Videos from './src/Toptab/Videos';
import Resources from './src/Toptab/Resources';
import Chapter from './src/Toptab/Chapter';
import Qnbank from './src/Toptab/Qnbank';

import Header from "./src/Bottomnav/Header";
import QnBank from "./src/Bottomnav/QnBank";
import Resource from "./src/Bottomnav/Resource";
import Videoss from './src/Bottomnav/Videoss';


const Tab = createMaterialTopTabNavigator();
const bottom = createBottomTabNavigator();




function MyTabs() {
  return (

    <Tab.Navigator>
      <Tab.Screen name='Videos' component={Mybot} style={styles.botmText} />

      <Tab.Screen name="Resource"
        component={Videos}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',

        }} />
      <Tab.Screen name="chapter"
        component={Resources}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        }} />
      {/* <Tab.Screen name="Chapter" component={Chapter} options={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      }} /> */}
      <Tab.Screen name="Qnbank" component={Qnbank} options={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      }} />
      
    </Tab.Navigator>
  );
}

function Mybot() {
  return (
    <bottom.Navigator>
      <bottom.Screen name="Videos"
        component={Videoss}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='rocket' size={24} color='blue' /> : <Icon name='rocket' size={24} color='gray' />
        }} />

      <bottom.Screen name="QnBank" component={QnBank} options={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused }) =>
          focused ? <Icon name='rocket' size={24} color='blue' /> : <Icon name='rocket' size={24} color='gray' />
      }} />

      <bottom.Screen name="Resource" component={Resource}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='rocket' size={24} color='blue' /> : <Icon name='rocket' size={24} color='gray' />
        }} />

      <bottom.Screen name="Header" component={Header}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='rocket' size={24} color='blue' /> : <Icon name='rocket' size={24} color='gray' />
        }} />

    </bottom.Navigator>
  );
}
export default function App() {

  return (

    <NavigationContainer>


      <View>
        {/* < Icon name='search' size={20} color='gray'/> */}
        <TextInput style={styles.textView}
          placeholder="Search for services" />
      </View>


      <MyTabs />

    </NavigationContainer>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',

    backgroundColor: 'white'
  },
  cartText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 180
  },
  textView: {
    height: 40,
    width: 350,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray', marginTop: 8,
  },
  botmText:{
    marginTop:200
  }
})