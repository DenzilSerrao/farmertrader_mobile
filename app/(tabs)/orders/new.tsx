
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';

const NewOrder = () => {
  const router = useRouter();
  const [preferences, setPreferences] = useState({
    closest: false,
    cheapest: false,
    entireStock: false,
  });

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.headerTitle}>Create New Order</Text>
      </View>
      <View style={styles.formContainer}>
        {/* Add dropdown for selecting crop */}
        <TextInput
          style={styles.input}
          placeholder="Units to Buy"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={preferences.closest}
            onValueChange={() => setPreferences({ ...preferences, closest: !preferences.closest })}
            color={preferences.closest ? '#2c6e49' : undefined}
          />
          <Text style={styles.label}>Closest to me</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={preferences.cheapest}
            onValueChange={() => setPreferences({ ...preferences, cheapest: !preferences.cheapest })}
            color={preferences.cheapest ? '#2c6e49' : undefined}
          />
          <Text style={styles.label}>Cheapest</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={preferences.entireStock}
            onValueChange={() => setPreferences({ ...preferences, entireStock: !preferences.entireStock })}
            color={preferences.entireStock ? '#2c6e49' : undefined}
          />
          <Text style={styles.label}>Entire stock from one vendor</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/orders')}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => router.push('/(tabs)/orders')}>
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>Back to Orders</Text>
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
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    marginHorizontal: 8,
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

export default NewOrder;
