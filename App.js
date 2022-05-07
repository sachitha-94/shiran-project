import { View, Text, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 40,
      }}
    >
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: "#DDDDDD",
          padding: 100,
        }}
      >
        <Text>UCSC</Text>
        <Text>2022</Text>
        <Text>ආයුබෝවන්</Text>
        <Text>**</Text>
        <Text>MIT3206</Text>
        <Text>AND</Text>
        <Text>MIT3106</Text>
      </TouchableOpacity>
    </View>
  );
}
