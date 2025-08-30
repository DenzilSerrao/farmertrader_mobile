
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={() => router.push('/(tabs)/profile/settings')}>
            <Ionicons name="settings-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual profile picture
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text> // Replace with actual name
        <Text style={styles.location}>New York, USA</Text> // Replace with actual location
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.infoRow}>
          <Ionicons name="mail-outline" size={20} color="#555" />
          <Text style={styles.infoText}>john.doe@example.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="call-outline" size={20} color="#555" />
          <Text style={styles.infoText}>+1 123 456 7890</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/profile/edit')}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={() => router.push('/auth/login')}>
        <Text style={[styles.buttonText, styles.logoutButtonText]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 18,
    color: 'gray',
  },
  infoSection: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 12,
  },
  button: {
    backgroundColor: '#2c6e49',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#d9534f',
  },
  logoutButtonText: {
    color: '#fff',
  }
});

export default Profile;
