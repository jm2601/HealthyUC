import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const LoginScreen = () => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='handled'
    >
      <View style={styles.formContainer}>
        <Text style={styles.titleLogo}>Welcome to Healthy UC</Text>
        <Input
          placeholder='Email'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Input
          placeholder='Password'
          secureTextEntry
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Button
          title='Login'
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
        />
        <Text style={styles.titleLogo}>Don't have an account?</Text>
        <Button
          title='Register'
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'green',
  },
  titleLogo: {
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

export default LoginScreen;
