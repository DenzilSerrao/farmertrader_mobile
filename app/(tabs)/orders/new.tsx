
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import CheckBox from 'expo-checkbox';

const NewOrder = () => {
  const router = useRouter();
  const [preferences, setPreferences] = React.useState({
    closest: false,
    cheapest: false,
    entireStock: false,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Order</Text>
      {/* Add dropdown for selecting crop */}
      <TextInput
        style={styles.input}
        placeholder="Units to Buy"
        keyboardType="numeric"
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={preferences.closest}
          onValueChange={() => setPreferences({ ...preferences, closest: !preferences.closest })}
        />
        <Text style={styles.label}>Closest to me</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={preferences.cheapest}
          onValueChange={() => setPreferences({ ...preferences, cheapest: !preferences.cheapest })}
        />
        <Text style={styles.label}>Cheapest</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={preferences.entireStock}
          onValueChange={() => setPreferences({ ...preferences, entireStock: !preferences.entireStock })}
        />
        <Text style={styles.label}>Entire stock from one vendor</Text>
      </View>
      <Button
        title="Confirm"
        onPress={() => router.push('/orders')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  label: {
    margin: 8,
  },
});

export default NewOrder;
