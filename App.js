import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
//import CreateAccount from './components/createAccount';
//add <CreateAccount/> under LoginScreen later 

//main function
export default function App() {
  return (
    //<View style={styles.container}>
      <LoginScreen />
    //</View>
  );
}
//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
