import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './app/screens/MainScreen';

export default function App() {
  const [index,setIndex]=useState(0)
  const handleIndex=()=>{
    setIndex(index+1)
  }
  return (
    <MainScreen index={index} handleIndex={handleIndex}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
