import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import Task from "./compenents/Task";

export default function App() {
  return (
    <SafeAreaView style={{ marginTop: 25 }}>
      <View style={styles.container}>
        <Task name="Task" />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCDCDC",
    width: "100%",
    height: "100%",
  },
});
