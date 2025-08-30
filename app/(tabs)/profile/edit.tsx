
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const EditProfile = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
       <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        placeholderTextColor="#aaa"
      />
       <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
      />
       <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => router.back()}>
        <Text style={[styles.buttonText, styles.secondaryButtonText]}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2c6e49',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#2c6e49',
  },
  secondaryButtonText: {
    color: '#2c6e49',
  }
});

export default EditProfile;
