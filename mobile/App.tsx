import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedbackBase, View } from 'react-native';
import Routes from "./src/routes";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize:36,
    fontWeight: "700",
  },
  h2: {
    fontSize:12,
    fontWeight: "700",
  }
});

export default App;