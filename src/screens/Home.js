import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
/*const character = {
  name: 'Luke Skywalker',
  home: 'Tatooine',
  species: 'human'
}*/

/*testing github repo*/

function Home(props) {
  const { navigation } = props
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
        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Detail')}>
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.prompts}>Don't have an account?</Text>
        <Button
          title="Forgot password?"
          onPress={() => alert("a pw reset link was sent to your email")}
          
        />
        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  buttonContainer: {
    marginTop: 20,
  },
  titleLogo: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    //margin: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

export default Home