import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function AllNotesScreen({ route }) {
  const notes = route.params?.notes || [];
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Усі записи</Text>
      {notes.map((note, index) => (
        <View key={index} style={styles.noteContainer}>
          <Text>{note}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAF3E0',
  },
  title: {
    fontSize: 24,
    color: '#8B4513',
    marginBottom: 20,
    textAlign: 'center',
  },
  noteContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#8B4513',
    marginVertical: 5,
  },
});
