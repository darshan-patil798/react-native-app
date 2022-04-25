import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import AppText from './AppText'

const OptionBlock = ({value,handleClick}) => {
  return (
    <TouchableHighlight style={styles.optionBackground} onPress={()=>{handleClick(value)}}>
      <AppText style={styles.optionValue}>{value}</AppText>
    </TouchableHighlight>
  )
}

export default OptionBlock

const styles = StyleSheet.create({
    optionBackground:{
        backgroundColor:"blue",
        flex:1,
        width:"100%",
        marginHorizontal:12,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:12,
        borderRadius:30
    },
    optionValue:{
        color:"white"
    }
})