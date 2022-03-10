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
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
// import ListItem from "./compenents/ListItem";
// import Task from "./compenents/Task";
// import Update from "./compenents/Update";

const COLORS = { primary: "#1f145c", white: "#fff" };

export default function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      task: "First todo",
      completed: true,
    },
    {
      id: 2,
      task: "Second todo",
      completed: true,
    },
  ]);

  const ListItem = ({ todo }) => {
    return (
      <View style={styles.listItem}>
        <View>
          <Text
            style={{ fontWeight: "bold", fontSize: 15, color: COLORS.primary }}
          >
            {todo?.task}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>TODO APP</Text>
        <Icon name="delete" size={25} color="red" />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
        data={todos}
        renderItem={({ item }) => <ListItem todo={item} />}
      />
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Add Todo" />
        </View>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Icon name="add" size={15} color={COLORS.white} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    color: COLORS.white,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: COLORS.white,
    elevation: 40,
    flex: 1,
    height: 40,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    elevation: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    padding: 20,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
});
