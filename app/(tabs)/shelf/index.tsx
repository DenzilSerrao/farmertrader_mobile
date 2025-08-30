
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';

interface Item {
  id: string;
  name: string;
  stock: number;
  expiry: string;
}

const Shelf = () => {
  const router = useRouter();
  const [items, setItems] = React.useState<Item[]>([
    { id: '1', name: 'Tomatoes', stock: 10, expiry: '2024-07-25' },
    { id: '2', name: 'Potatoes', stock: 5, expiry: '2024-08-10' },
    { id: '3', name: 'Carrots', stock: 20, expiry: '2024-07-30' },
  ]);

  const lowStockItems = items.filter(item => item.stock < 6);

  // This alert is a bit intrusive, a better approach would be to display a warning on the UI
  // if (lowStockItems.length > 0) {
  //   Alert.alert('Low Stock', `The following items are low in stock: ${lowStockItems.map(item => item.name).join(', ')}`)
  // }

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDetail}>Stock: {item.stock}</Text>
        <Text style={styles.itemDetail}>Expiry: {item.expiry}</Text>
      </View>
      {item.stock < 6 && <Text style={styles.lowStockWarning}>Low Stock</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
       <View style={styles.header}>
          <Text style={styles.headerTitle}>My Shelf</Text>
        </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => router.push('/(tabs)/shelf/add')}>
        <Text style={styles.addButtonText}>+ Add New Item</Text>
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
  itemDetail: {
    fontSize: 16,
    color: '#555',
  },
  lowStockWarning: {
    color: '#d9534f',
    fontWeight: 'bold',
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

export default Shelf;
