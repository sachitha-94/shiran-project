import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const screenOnClick = () => {
    setCurrentTime(new Date());
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={screenOnClick}
        style={{
          alignItems: "center",
          backgroundColor: "#DDDDDD",
          padding: 100,
        }}
      >
        <Text>Current Time is: ( Press here)</Text>
        <Text>{currentTime.toISOString()}</Text>
      </TouchableOpacity>
    </View>
  );
}
