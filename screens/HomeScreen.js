import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSport, setSelectedSport] = useState('Jiu Jitsu');

  const sports = ['Jiu Jitsu', 'Muay Thai'];

  const selectSport = (sport) => {
    setSelectedSport(sport);
    setModalVisible(false);
  };

  const goToHistory = () => {
    setModalVisible(false);
    navigation.navigate('Histórico');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <View style={styles.logoWrapper}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>
        <Text style={styles.username}>Bem-vindo(a)</Text>
        <Text style={styles.subtitle}>Esporte: {selectedSport}</Text>
      </View>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Calendário')}>
          <Icon name="calendar" size={30} color="#000" />
          <Text style={styles.cardText}>Calendário</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={goToHistory}>
          <Icon name="history" size={30} color="#000" />
          <Text style={styles.cardText}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon name="chart-bar" size={30} color="#000" />
          <Text style={styles.cardText}>Estatísticas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => setModalVisible(true)}>
          <Icon name="account-edit" size={30} color="#000" />
          <Text style={styles.cardText}>Trocar Esporte</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Escolha o Esporte</Text>
            {sports.map((sport) => (
              <TouchableOpacity
                key={sport}
                style={styles.sportOption}
                onPress={() => selectSport(sport)}
              >
                <Text style={styles.sportText}>{sport}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#111',
    height: 180,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  headerInner: {
    alignItems: 'center',
  },
  logoWrapper: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 8,
  },
  logo: {
    width: 60,
    height: 60,
  },
  username: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: 30,
  },
  card: {
    width: '40%',
    aspectRatio: 1,
    backgroundColor: '#f4f4f4',
    borderRadius: 16,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    marginTop: 8,
    fontSize: 14,
    color: '#111',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    marginHorizontal: 40,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  sportOption: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  sportText: {
    fontSize: 18,
    color: '#333',
  },
});
