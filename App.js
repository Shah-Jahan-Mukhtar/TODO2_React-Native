import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './compenents/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <Task />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
   
  },
});
