import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Головний екран</Text>
      <Button title="Створити запис" onPress={() => navigation.navigate("Diary Notes", { addNote })} />
      <Button title="Переглянути всі записи" onPress={() => navigation.navigate("All Notes", { notes })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAF3E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#8B4513',
    marginBottom: 20,
  },
});
