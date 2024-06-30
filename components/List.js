import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Contact from './Kontak';

const List = ({ navigation }) => {
  const contacts = [
    { gambar: require('../assets/geri.png'),
     nama: 'Gerie Panca Sukma', 
     biodata:{
     profil: require('../assets/geri.png'), 
     nama       : 'Gerie Panca Sukma',
     nomor      : '08561234567',
     email      : '@geriSukma.com',
     alamat     : 'Jl. Lingkar Selatan no. 10',
     perusahaan : 'SDS Access',
     instagram  : '@sds.access'}
    },

    { gambar: require('../assets/arya.png'),
     nama: 'M. Arya Krismawan',
     biodata:{ 
     profil: require('../assets/arya.png'), 
     nama       : 'M. Arya Krismawan',
     nomor      : '08572345678',
     email      : '@aryakris.com',
     alamat     : 'Jl. Raya Cibadak no. 20',
     perusahaan : 'SDS Access',
     instagram  : '@sds.access'}
    },

    { gambar: require('../assets/ghani.png'),
     nama: 'Ghani Edytia Oktaviansyah',
     biodata:{ 
     profil: require('../assets/ghani.png'), 
     nama       : 'Ghani Edytia Oktaviansyah',
     nomor      : '08583456787',
     email      : '@ghaniOkta.com',
     alamat     : 'Jl. Gunung Walat n0. 30',
     perusahaan : 'SDS Access',
     instagram  : '@sds.access'}
    },

    { gambar: require('../assets/ilyasa.png'),
     nama: 'Ilyasa Nur', 
     biodata:{ 
     profil: require('../assets/ilyasa.png'), 
     nama       : 'Ilyasa Nur',
     nomor      : '08574567890',
     email      : '@ilyasaNur.com',
     alamat     : 'Jl. Sukaraja no. 25',
     perusahaan : 'SDS Access',
     instagram  : '@sds.access'}
    },

    { gambar: require('../assets/naya.png'), 
     nama: 'Tanaya Salsabila Arliansyah',
     biodata:{ 
     profil: require('../assets/naya.png'), 
     nama       : 'Tanaya Salsabila Arliansyah',
     nomor      : '08575678901',
     email      : '@tanayaSA.com',
     alamat     : 'Jl. Cisaat no. 68',
     perusahaan : 'SDS Access',
     instagram  : '@sds.access'}
    },

    { gambar: require('../assets/delin.png'),
    nama: 'Delinda Mega Putri',
     biodata:{ 
     profil: require('../assets/delin.png'), 
     nama       : 'Delinda Mega Putri',
     nomor      : '08126789123',
     email      : '@delindamega.com',
     alamat     : 'Jl. Cirumput no. 32',
     perusahaan : 'ASGStore ',
     instagram  : '@asgstore.ummi'}
    },

    { gambar: require('../assets/rani.png'), 
     nama: 'Rani Febriani',
    biodata:{ 
     profil: require('../assets/rani.png'), 
     nama       : 'Rani Febriani',
     nomor      : '08587890123',
     email      : '@raniFebriani.com',
     alamat     : 'Jl. Jampang Kidul no. 23',
     perusahaan : 'UPM',
     instagram  : '@upm.ummi'}
    },
    
    { gambar: require('../assets/eneng.png'),
     nama: 'Eneng Rahayu', 
     biodata:{ 
     profil: require('../assets/eneng.png'), 
     nama       : 'Eneng Rahayu',
     nomor      : '08128902345',
     email      : '@enengRahayu.com',
     alamat     : 'Jl. Warung Kiara no. 50',
     perusahaan : 'ASGStore ',
     instagram  : '@asgstore.ummi'}
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.contactContainer}>
        {contacts.map((contact, index) => (
          <Contact
            key={index}
            gambar={contact.gambar}
            profil={contact.profil}
            nama={contact.nama}
            nomor={contact.nomor}
            email={contact.email}
            alamat={contact.alamat}
            perusahaan={contact.perusahaan}
            instagram={contact.instagram}
            onPress={() => navigation.navigate('About', { biodata: contact.biodata })}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 20,
  },

  contactContainer: {
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  
});

export default List;
