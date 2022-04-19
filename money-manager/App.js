import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { BackHandler, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import AddNoteForm from './components/AddNoteForm';
import ListOfNotes from './components/ListOfNotes';

export default function App() {
  const [allNotes,setAllNotes]=useState([""])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <AddNoteForm allNotes={allNotes} setAllNotes={setAllNotes}/>
      <View style={{ marginVertical: 12, borderColor: "black", justifyContent: "center" }}>
        <ListOfNotes allNotes={allNotes} setAllNotes={setAllNotes}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "12%",
    // paddingHorizontal:"12%",
    backgroundColor: '#db606d'
    // alignItems: 'center', 
    // justifyContent: 'center',
  },
});
