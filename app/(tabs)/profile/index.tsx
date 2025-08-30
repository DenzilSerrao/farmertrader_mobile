
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

const Profile = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual profile picture
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text> // Replace with actual name
        <Text style={styles.location}>New York, USA</Text> // Replace with actual location
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text>Email: john.doe@example.com</Text> // Replace with actual email
        <Text>Phone: +1 123 456 7890</Text> // Replace with actual phone number
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        {/* Add recent activity components here */}
      </View>
      <Button
        title="Edit Profile"
        onPress={() => router.push('/profile/edit')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    color: 'gray',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Profile;
