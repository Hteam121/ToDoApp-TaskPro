import { StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView, StyleSheet, View} from 'react-native';
import Navigation from './src/navigation';
import { app, analytics } from './src/components/firebase.js';
// import TodoListScreen from './src/screens/ToDoListScreen/ToDoListScreen';

const App = () => {
  console.disableYellowBox = true
  console.disableRedBox = true
  return (
    <View style={styles.root}>
      <Navigation/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
});


export default App;
