import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert  } from 'react-native';
import ScreenWrapper from './ScreenWrapper';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';
import RNFS from 'react-native-fs';
import Icon from '../assets/icons/Icon';



const QRProfile2 = ({ route }) => {
  const viewRef = useRef();
  const { qrCodeUri, name, title, phone, email, website } = route.params;
  const safeName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  const now = new Date();
  const shortDate = `${String(now.getFullYear()).slice(2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;
  // Download handler
  const handleDownload = async () => {
    try {
      const uri = await viewRef.current.capture();
      const filePath = `${RNFS.PicturesDirectoryPath}/QR_${safeName}_${shortDate}.png`;
      await RNFS.moveFile(uri, filePath);
      Alert.alert('Saved!', `Image saved to: ${filePath}`);
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  // Share handler
  const handleShare = async () => {
    try {
      const uri = await viewRef.current.capture();
      await Share.open({
        url: 'file://' + uri,
        type: 'image/png',
      });
    } catch (e) {
      if (e.message !== 'User did not share') {
        Alert.alert('Error', e.message);
      }
    }
  };

  return (
    <ScreenWrapper bg="#f5f7fa">
      <ViewShot ref={viewRef} options={{ format: 'png', quality: 1.0 }} >
        <View style={styles.screenshotbg}>
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
                <View style={styles.detailRow}>
                  <View style={styles.detailRowIcon}>
                    <Icon name="phone" height="16" width="16"/> 
                  </View>
                <Text style={styles.detail}>  {phone}</Text>
                </View>
                <View style={styles.detailRow}>
                  <View style={styles.detailRowIcon}>
                    <Icon name="mail" height="16" width="16"/>
                  </View>
                  <Text style={styles.detail}>  {email}</Text>
                </View>
                <View style={styles.detailRow}>
                  <View style={styles.detailRowIcon}>
                    <Icon name="earth" height="16" width="16"/>
                  </View>
                  <Text style={styles.detail}>  {website}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ViewShot>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleDownload}>
          <Text style={styles.actionText}>Download QR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
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
  detailRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 8,
  },
  detailRowIcon: {
    marginBottom: 6,
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
  screenshotbg: {
    backgroundColor: 'transparent', 
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',      
    marginTop: 30,
    marginRight: 16,
    gap: 10,                 
  },
  actionButton: {
    backgroundColor: '#16733e',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginLeft: 8,
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default QRProfile2;