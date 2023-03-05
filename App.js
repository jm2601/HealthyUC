import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';


//main function
export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}
//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
