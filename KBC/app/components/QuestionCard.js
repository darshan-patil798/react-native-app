import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'

const QuestionCard = ({question}) => {
  return (
    <View style={styles.cardContainer}>
        <AppText style={styles.question}>{question}</AppText>
    </View>
  )
}
const styles = StyleSheet.create({
    cardContainer:{
        marginBottom:"15%",
        backgroundColor:"#00B7EB",
        marginHorizontal:12,
        paddingHorizontal:12,
        flex:0.2,
        paddingTop:12,
        alignItems:'center',
        borderRadius:35
    },
    question:{
        fontSize:25,
        color:"white"
    }
})


export default QuestionCard