
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Settings = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      <View style={styles.formContainer}>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => router.back()}>
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
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

export default Settings;
