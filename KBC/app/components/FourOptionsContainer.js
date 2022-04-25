import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OptionBlock from './OptionBlock'

const FourOptionsContainer = ({options,handleClick}) => {
  return (
    <View style={styles.container}>
    {options && options.map((option)=>{
       return <OptionBlock value={option} key={option} handleClick={handleClick}/>
    })}
    </View>
  )
}

export default FourOptionsContainer

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#00B7EB",
        marginHorizontal:12,
        paddingHorizontal:12,
        flex:0.6,
        // paddingTop:12,
        alignItems:'center',
        borderRadius:35,
        overflow:"hidden"
    }
})