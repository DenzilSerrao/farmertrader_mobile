
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

interface Order {
  id: string;
  name: string;
  status: 'Pending' | 'Accepted' | 'Shipped' | 'Delivered';
}

const Orders = () => {
  const router = useRouter();
  const orders: Order[] = [
    { id: '1', name: 'Tomatoes (10kg)', status: 'Pending' },
    { id: '2', name: 'Potatoes (25kg)', status: 'Accepted' },
    { id: '3', name: 'Carrots (15kg)', status: 'Shipped' },
    { id: '4', name: 'Cucumbers (5kg)', status: 'Delivered' },
  ];

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'Pending': return '#f0ad4e';
      case 'Accepted': return '#5bc0de';
      case 'Shipped': return '#337ab7';
      case 'Delivered': return '#5cb85c';
      default: return '#777';
    }
  };

  const renderItem = ({ item }: { item: Order }) => (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <Text style={[styles.itemStatus, { backgroundColor: getStatusColor(item.status) }]}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Orders</Text>
      </View>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => router.push('/(tabs)/orders/new')}>
        <Text style={styles.addButtonText}>+ New Order</Text>
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
  listContainer: {
    padding: 16,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemStatus: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  addButton: {
    backgroundColor: '#2c6e49',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    margin: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Orders;
