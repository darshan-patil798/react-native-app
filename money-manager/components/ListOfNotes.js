import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React from 'react'

const ListOfNotes = ({ allNotes, setAllNotes }) => {
    return (
        <View style={{ display: "flex", justifyContent: "center" }}>
            <ScrollView>
            {allNotes && allNotes.map((Note) => {
                return <Text style={{borderRadius:12, marginHorizontal:12, elevation:12, shadowColor:"blue", textAlign: 'center',backgroundColor:"red",borderColor:"black", borderStyle:"solid", marginVertical:8,paddingVertical:8}} key={Note}>{Note}</Text>
            })}
            </ScrollView>
        </View>
    )
}

export default ListOfNotes;