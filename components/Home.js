import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={require('../assets/icon.png')}
          style={styles.image}
        />
        <Button title="Kontak" onPress={() => navigation.navigate('List')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  
  box: {
    width: 200,
    padding: 20,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    alignItems: 'center',
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default Home;
