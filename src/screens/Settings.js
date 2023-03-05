import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function Settings(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meals of the day</Text>
      <Text style={styles.text}>Monday</Text>
      <View style={styles.card}>
      
        <Text style={styles.cardText}>Breakfast: French Toast & Orange Juice</Text>
        <Text style={styles.cardText}>Lunch: Salad & Tea</Text>
        <Text style={styles.cardText}>Dinner: Vegan Hot Wings</Text>

      </View>
      <Text style={styles.text}>Tuesday</Text>
      <View style={styles.card}>
      
        <Text style={styles.cardText}>Breakfast: Vegan Pancakes & Juice</Text>
        <Text style={styles.cardText}>Lunch: Tuna Salad & Lemonade Slushy</Text>
        <Text style={styles.cardText}>Dinner: Vegan Burgers</Text>
        

      </View>
      
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  card: {
    width: 350,
    height: 110,
    borderRadius: 10,
    backgroundColor: 'navy',
    margin: 10,
    padding: 10,
    alignItems: 'center'
  },
  cardText: {
    fontSize: 18,
    color: '#ffd700',
    marginBottom: 10
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

export default Settings