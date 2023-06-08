import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import CustomeComp from './src/screens/CustomComp';
import FlatListDemo from './src/screens/FlatListDemo'
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>My first react native application!</Text>
      <CustomeComp/>
      <FlatListDemo/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textstyle:{
    color:"blue",
    fontSize:"20px"

  }
});
