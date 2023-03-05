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
        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Detail')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
        <Text style={styles.prompts}>Don't have an account?</Text>
        <Button
          title="Forgot password?"
          onPress={() => alert("Button tapped")}
          
        />
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
    fontSize: 20,
  },
  prompts: {
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

export default LoginScreen;
