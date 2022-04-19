import { View, Text, SafeAreaView, FlatList, ScrollView, Touchable, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'

const ListOfNotes = ({ allNotes, setAllNotes }) => {
    return (
        <View style={{ display: "flex", justifyContent: "center" }}>
            {allNotes && allNotes.length > 0 ? (
                <ScrollView >

                    {allNotes && allNotes.map((Note,Index) => {
                        return (
                            <TouchableHighlight key={Index}>
                                <Text style={{ borderRadius: 12, marginHorizontal: 12, elevation: 11, shadowColor: "blue", textAlign: 'center', backgroundColor: "red", borderColor: "black", borderStyle: "solid", marginVertical: 8, paddingVertical: 8 }}>{Note}</Text>
                            </TouchableHighlight>
                        )
                    })}
                </ScrollView>
            ) :
                (
                    <Text style={{textAlign:"center"}}>No Notes saved yet!</Text>
                )}
        </View>
    )
}

export default ListOfNotes;