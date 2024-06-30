import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Home from './Home';

const About = ({ route }) => {
  const { biodata } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={biodata.profil} style={styles.profil} />
        <Text style={styles.contact}>{biodata.nama}</Text>
      </View>

      <View style={styles.iconButton}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/chat.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/phone.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Nomor</Text>
          <Text style={styles.titik}>:</Text>
          <Text style={styles.info}>{biodata.nomor}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.titik}>:</Text>
          <Text style={styles.info}>{biodata.email}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Alamat</Text>
          <Text style={styles.titik}>:</Text>
          <Text style={styles.info}>{biodata.alamat}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Perusahaan</Text>
          <Text style={styles.titik}>:</Text>
          <Text style={styles.info}>{biodata.perusahaan}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Instagram</Text>
          <Text style={styles.titik}>:</Text>
          <Text style={styles.info}>{biodata.instagram}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingVertical: 10,
  },

  profil: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },

  contact: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },

  iconButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    paddingVertical: 10,
  },

  button: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  icon: {
    width: 24,
    height: 24,
  },

  infoContainer: {
    padding: 20,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    minWidth: 100,
  },

  titik:{
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },

  info: {
    fontSize: 16,
    flex: 1,
  },
});

export default About;