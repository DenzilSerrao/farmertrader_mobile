
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditProfile = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
      />
      <Button
        title="Save"
        onPress={() => router.push('/profile')}
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

export default EditProfile;
