import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global';
import { getFeedbacks } from '../scripts/api';

export default function HistoryScreen() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getFeedbacks();
        setFeedbacks(data);
      } catch (error) {
        console.error('Erro ao carregar feedbacks:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.sport}>{item.sport}</Text>
      <Text style={styles.content}>{item.comment}</Text>
    </View>
  );

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Histórico de Treinos</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#4CAF50" />
      ) : (
        <FlatList
          data={feedbacks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#eee',
    padding: 12,
    marginBottom: 10,
    borderRadius: 6,
    width: '100%',
  },
  date: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  sport: {
    color: '#4CAF50',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  content: {
    color: '#333',
  },
});
