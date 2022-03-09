import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Task from "./compenents/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [taskAdd, setTaskAdd] = useState([]);

  const Add = () => {
    setTaskAdd([...taskAdd, task]);
    setTask(null);
  };

  return (
    <SafeAreaView style={{ marginTop: 25 }}>
      <View style={styles.container}>
        <ScrollView>
          <StatusBar style="auto" />
          <Text style={{ padding: 40, fontWeight: "bold", fontSize: 25 }}>
            TODO LIST
          </Text>
          <View>
            {taskAdd.map((item, index) => {
              return <Task name={item} key={index} />;
            })}
          </View>

          <View style={{ marginTop: 470, flexDirection: "row" }}>
            <KeyboardAvoidingView style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.input}
                placeholder="Enter The Task"
                value={task}
                onChangeText={(test) => setTask(test)}
              />
              <TouchableOpacity onPress={() => Add()}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#FD1C03",
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 10,
                  }}
                >
                  <Text
                    style={{ fontWeight: "bold", fontSize: 20, color: "white" }}
                  >
                    +
                  </Text>
                </View>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
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
    width: 280,
    height: 50,
    backgroundColor: "white",
    padding: 10,
    marginLeft: 10,
    borderRadius: 20,
  },
});
