import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Contact({ gambar, profil, nama, nomor, email, alamat, perusahaan, instagram, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={gambar} style={styles.img} />
        <View style={styles.teks}>
        <Text style={styles.profil}>{profil}</Text>
          <Text style={styles.title}>{nama}</Text>
          <Text style={styles.nomor}>{nomor}</Text>
          <Text style={styles.teks}>{email}</Text>
          <Text style={styles.teks}>{alamat}</Text>
          <Text style={styles.teks}>{perusahaan}</Text>
          <Text style={styles.teks}>{instagram}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
  },
  teks: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  nomor: {
    fontSize: 14,
    color: '#3498db',
  },
});
