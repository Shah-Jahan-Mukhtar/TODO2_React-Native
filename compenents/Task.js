import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const Task = (props) => {
  return (
    <SafeAreaView>
      <View style={{ justifyContent: "space-around", alignItems: "center" }}>
        <View
          style={{
            width: "90%",
            height: 50,
            backgroundColor: "white",
            justifyContent: "space-between",
            alignItems: "center",
            // marginLeft: "5%",
            borderRadius: 10,
            flexDirection: "row",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              // marginLeft: 10,
              width: 20,
              height: 20,
              borderWidth: 5,
              borderRadius: 50,
              marginRight: 5,
              borderColor: "#0000A5",
            }}
          ></View>
          <View>
            <Text style={{ fontWeight: "bold", marginRight: 25, color: "red" }}>
              {props.name}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Task;
