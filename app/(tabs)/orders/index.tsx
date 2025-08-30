
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const Orders = () => {
  const router = useRouter();
  const orders = [
    { id: '1', name: 'Order 1', status: 'Pending' },
    { id: '2', name: 'Order 2', status: 'Delivered' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.name}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
      />
      <Button
        title="+ New Order"
        onPress={() => router.push('/orders/new')}
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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Orders;
