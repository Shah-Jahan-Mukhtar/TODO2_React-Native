import { View, Text, StyleSheet } from "react-native";
import React from "react";

const COLORS = { primary: "#1f145c", white: "#fff" };

const ListItem = ({ todo }) => {
  return (
    <View style={StyleSheet.listItem}>
      <Text style={{ fontWeight: "bold", fontSize: 15, color: COLORS.primary }}>
        {todo?.task}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
});

export default ListItem;
