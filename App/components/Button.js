import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});

export default ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={require("../assets/images/reverse.png")}
        style={styles.buttonIcon}
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
