import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
export default function CustomComp() {
  return (
    <View>
      <Text style={styles.textstyle}>Custom Component!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textstyle: {
    color: "red",
    fontSize: "20px",
  },
});
