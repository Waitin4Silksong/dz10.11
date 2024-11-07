import React, { useState } from 'react';
import { Button, View, TextInput, Alert, StyleSheet } from 'react-native';

export default function DiaryNotesScreen({ navigation, route }) {
  const [note, setNote] = useState('');

  const saveNote = () => {
    if (note.trim()) {
      route.params.addNote(note);
      Alert.alert('Запис збережено');
      setNote('');
      navigation.navigate("Home");
    } else {
      Alert.alert('Будь ласка, введіть текст запису');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Напишіть ваш запис..."
        value={note}
        onChangeText={setNote}
      />
      <Button title="Зберегти" onPress={saveNote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAF3E0',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#8B4513',
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#FFF8E7',
  },
});
