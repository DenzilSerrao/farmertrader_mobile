
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddItem = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Stock"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
      />
      <Button
        title="Add Item"
        onPress={() => router.push('/shelf')}
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
});

export default AddItem;
