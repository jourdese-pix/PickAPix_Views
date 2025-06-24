import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const QRProfile = ({ route }) => {
  const { qrCodeUri, name, title, phone, email, website } = route.params;
    {{console.log(qrCodeUri, name, title, phone, email, website)}}
  return (

    <View style={styles.card}>
      <Image source={{ uri: qrCodeUri }} style={styles.qrCode} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.detail}>📞 {phone}</Text>
        <Text style={styles.detail}>✉️ {email}</Text>
        <Text style={styles.detail}>🌐 {website}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  qrCode: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 16,
  },
  infoContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  detail: {
    fontSize: 14,
    color: '#444',
    marginVertical: 2,
  },
});

export default QRProfile;
