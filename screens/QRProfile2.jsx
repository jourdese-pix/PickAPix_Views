import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ScreenWrapper from './ScreenWrapper';


const QRProfile2 = ({ route }) => {
  const { qrCodeUri, name, title, phone, email, website } = route.params;

  return (
    <ScreenWrapper bg="#f5f7fa">
      <View style={styles.container}>
        <View style={styles.card}>
          {/* Pixelmine Logo */}
          <Image
            source={require('../assets/Logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <Image source={{ uri: qrCodeUri }} style={styles.qrCode} />

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.separator} />

          <View style={styles.contactBlock}>
            <Text style={styles.detail}>📞   {phone}</Text>
            <Text style={styles.detail}>✉️   {email}</Text>
            <Text style={styles.detail}>🌐   {website}</Text>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    borderRadius: 20,
    padding: 24,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  logo: {
    width: 200,
    height: 48,
    marginBottom: 24,
    alignSelf: 'center',
  },
  qrCode: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
    letterSpacing: 0.3,
    marginBottom: 2,
  },
  title: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 16,
  },
  separator: {
    height: 1,
    width: '85%',
    backgroundColor: '#e5e7eb',
    marginVertical: 16,
  },
  contactBlock: {
    width: '100%',
    paddingHorizontal: 10,
  },
  detail: {
    fontSize: 15,
    color: '#374151',
    marginBottom: 8,
    letterSpacing: 0.2,
  },
});

export default QRProfile2;