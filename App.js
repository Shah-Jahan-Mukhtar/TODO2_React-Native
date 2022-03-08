import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";

import Task from "./compenents/Task";

export default function App() {
  return (
    <SafeAreaView style={{ marginTop: 25 }}>
      <View style={styles.container}>
        <Task name="Task" />
        <StatusBar style="auto" />

        <View style={{ marginTop: "130%" }}>
          <KeyboardAvoidingView>
            <TextInput style={styles.input} />
          </KeyboardAvoidingView>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: "#FD1C03",
              borderRadius: "50%",
            }}
          >
            <Text>+</Text>
          </View>
        </View>
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
  input: {
    width: "80%",
    height: "10%",
    backgroundColor: "white",

    marginLeft: 10,
    borderRadius: 20,
  },
});
