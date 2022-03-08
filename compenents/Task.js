import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const Task = (props) => {
  return (
    <SafeAreaView>
      <View>
        <View style={{ padding: 50 }}>
          <Text>TODO list</Text>
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
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{props.name}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Task;
