
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, Alert } from 'react-native';

const Shelf = () => {
  const router = useRouter();
  const [items, setItems] = React.useState([
    { id: '1', name: 'Item 1', stock: 10 },
    { id: '2', name: 'Item 2', stock: 5 },
  ]);

  const lowStockItems = items.filter(item => item.stock < 6);

  if (lowStockItems.length > 0) {
    Alert.alert('Low Stock', `The following items are low in stock: ${lowStockItems.map(item => item.name).join(', ')}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shelf</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.name}</Text>
            <Text>Stock: {item.stock}</Text>
          </View>
        )}
      />
      <Button
        title="+ Add New Item"
        onPress={() => router.push('/shelf/add')}
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

export default Shelf;
