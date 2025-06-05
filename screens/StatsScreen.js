import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

export default function StatsScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Estatísticas</Text>
      <Text style={globalStyles.subtitle}>Acompanhe seu progresso</Text>
      <Button title="Voltar ao Início" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
