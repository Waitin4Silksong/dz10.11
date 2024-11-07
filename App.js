import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import DiaryNotesScreen from "./screens/DiaryNotesScreen";
import AllNotesScreen from "./screens/AllNotesScreen";

const Stack = createStackNavigator();

export default function App() {
  const [notes, setNotes] = React.useState([]);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} notes={notes} />}
        </Stack.Screen>
        <Stack.Screen name="Diary Notes">
          {(props) => <DiaryNotesScreen {...props} addNote={addNote} />}
        </Stack.Screen>
        <Stack.Screen name="All Notes">
          {(props) => <AllNotesScreen {...props} notes={notes} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
