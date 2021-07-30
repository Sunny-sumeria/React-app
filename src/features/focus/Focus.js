import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, StyleSheet, Text, FlatList, SafeAreaView,Button } from "react-native";
import * as Speech from 'expo-speech';

import { fontSizes } from "../../utils/sizes";

export const Focus = ({ addSubject, focusHistory }) => {
  const [focusItem, setFocusItem] = useState(null);
  const speak = () => {
    Speech.speak("Focusing on      " + focusItem);
  };
  
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>What would you like to focus on?</Text>
      <View style={styles.container}>
        <TextInput
          style={{ flex: 1 }}
          maxLength={50}
          onChangeText={setFocusItem}
          value={focusItem}
          onSubmitEditing={({ nativeEvent: { text } }) => setFocusItem(text)}
        />
        <Button
          style={styles.addSubject}
          title="+"
          onPress={() => {addSubject(focusItem); speak();}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  titleContainer: { flex: 0.5, padding: 16, justifyContent: "center" },
  title: {
    color: "white",
    fontWeight: "bold",
    padding: 16,
    fontSize: fontSizes.lg,
  },
  addSubject: { marginLeft: 10, alignSelf: "center" },
});
