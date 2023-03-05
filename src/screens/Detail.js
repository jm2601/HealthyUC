import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function Detail(props) {
  const { route, navigation } = props
  //const { item } = route.params
  //const { name, home, species } = item
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <View style={styles.card}>
      
        <Text style={styles.cardText}>Name: John Doe</Text>
        <Text style={styles.cardText}>Age: 21 </Text>
        <Text style={styles.cardText}>Body Mass Index: ###</Text>
        <Text style={styles.cardText}>Calorie Goal: 1500 </Text>
        <Text style={styles.cardText}>Bulk/Cut/Balanced: Cut </Text>
        <Text style={styles.cardText}>Allergies: Peanuts, Shell Fish</Text>
        <Text style={styles.cardText}>Diet: Vegan </Text>
        <Text style={styles.cardText}>Meals Per Day: 3 </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  card: {
    width: 350,
    height: 230,
    borderRadius: 10,
    backgroundColor: 'navy',
    margin: 10,
    padding: 10,
    alignItems: 'center'
  },
  cardText: {
    fontSize: 18,
    color: '#ffd700',
    marginBottom: 5
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

export default Detail