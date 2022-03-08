import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const Task = (props) => {
  return (
    <SafeAreaView>
      <View>
        <View style={{ padding: 40 }}>
          <Text style={{ fontWeight: "bold", fontSize: 32 }}>TODO list</Text>
        </View>
        <View
          style={{
            width: "90%",
            height: 50,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "5%",
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              marginRight: "75%",
              marginLeft: 10,
              width: 20,
              height: 20,
              borderWidth: 5,
              borderRadius: 5,
              borderColor: "#0000A5",
            }}
          ></View>

          <Text style={{ fontWeight: "bold" }}>{props.name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Task;
