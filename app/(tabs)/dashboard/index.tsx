
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Dashboard = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Dashboard</Text>
          <TouchableOpacity onPress={() => router.push('/notifications')}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* News Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>News</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Market Prices Up</Text>
            <Text style={styles.cardContent}>The prices for most crops have seen a significant increase this week.</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>New Farming Techniques</Text>
            <Text style={styles.cardContent}>Experts share new, more efficient farming techniques for the upcoming season.</Text>
          </View>
        </View>

        {/* Sales Analytics Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sales Analytics</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Price Trends</Text>
            <Text style={styles.cardContent}>Graph showing price trends will be here.</Text>
            {/* Placeholder for a graph */}
            <View style={styles.graphPlaceholder} />
          </View>
        </View>

        {/* Search for Crops Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Search for Crops / Marketplace</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Find what you need</Text>
            <Text style={styles.cardContent}>Use the search and map to find crops from farmers near you.</Text>
            {/* Placeholder for a map */}
            <View style={styles.mapPlaceholder} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
  },
  graphPlaceholder: {
    height: 150,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholder: {
    height: 200,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Dashboard;
