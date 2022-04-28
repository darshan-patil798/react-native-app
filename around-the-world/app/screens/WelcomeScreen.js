import { Image, StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import ListItemSeparator from '../components/lists/ListItemSeparator';


import React from 'react'

export default function WelcomeScreen() {
  return (
    <Screen style={styles.container}>
        <Image style={styles.logo} source={require('../assets/instagram-logo.png')}/>
        <AppText style={styles.textBelowLogo}>Arround The world</AppText>
    </Screen>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:"center"
    },
    logo:{
        height:"30%",
        width:"30%",
    },
    textBelowLogo:{
        color:"red",
        fontFamily:"Roboto",
        fontStyle:"italic",
        fontWeight:"400",
        position:"absolute",
        bottom:"36%"

    }
})