import { View, Text, TextInput, Button, SafeAreaView, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function AddNoteForm({allNotes,setAllNotes}) {
    const [searchedText, setSearchedText] = useState("")

    const handleSearch = () => {
        setAllNotes([...allNotes,searchedText])
        setSearchedText("")
    }
    return (
        <SafeAreaView>
            <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                <TextInput style={{ flex: 1, backgroundColor: 'white', borderRadius: 12, elevation: 12, marginRight: 12 }} value={searchedText} onChangeText={(text) => { setSearchedText(text) }} />
      

                <TouchableOpacity
                    style={{flex:0.3, elevation: 12, backgroundColor:"white",borderRadius:12,justifyContent:"center",alignItems:'center' ,paddingVertical:12}}
                    onPress={handleSearch}
                >
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}