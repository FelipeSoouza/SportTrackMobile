import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  Button,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { saveFeedback } from '../scripts/api';
import { logger } from 'react-native-logs';

const log = logger.createLogger();

export default function CalendarScreen() {
  const [markedDates, setMarkedDates] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [feedback, setFeedback] = useState('');

  const onDayPress = (day) => {
    const date = day.dateString;
    setSelectedDate(date);
    setFeedback(markedDates[date]?.feedback || '');
    setModalVisible(true);
  };

  const handleSave = async () => {
    if (!feedback.trim()) {
      Alert.alert('Feedback vazio', 'Digite algo antes de salvar.');
      return;
    }

    setMarkedDates((prev) => ({
      ...prev,
      [selectedDate]: {
        selected: true,
        selectedColor: '#000',
        feedback: feedback.trim(),
      },
    }));

    log.debug(feedback)

    try {
      await saveFeedback({
        date: selectedDate,
        text: feedback.trim(),
      });

      setModalVisible(false);
    } catch (err) {
      Alert.alert('Erro ao salvar feedback', 'Tente novamente.');
    }
  };

  const deleteMark = () => {
    setMarkedDates((prev) => {
      const copy = { ...prev };
      delete copy[selectedDate];
      return copy;
    });
    setModalVisible(false);
  };

  useEffect(() => {
    log.debug(feedback);
  }, [feedback])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CALENDÁRIO</Text>
      </View>
      <View style={styles.calendarWrapper}>
        <Calendar
          onDayPress={onDayPress}
          markedDates={markedDates}
          style={styles.calendar}
          theme={{
            backgroundColor: '#1a1a1a',
            calendarBackground: '#1a1a1a',
            textSectionTitleColor: '#ccc',
            selectedDayBackgroundColor: '#fff',
            selectedDayTextColor: '#000',
            todayTextColor: '#fff',
            dayTextColor: '#ccc',
            arrowColor: '#fff',
            monthTextColor: '#fff',
            indicatorColor: '#fff',
          }}
        />
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Pressable style={styles.modalContent}>
            <Text style={styles.modalTitle}>Feedback do treino</Text>
            <Text style={styles.modalDate}>{selectedDate}</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu feedback..."
              placeholderTextColor="#999"
              multiline
              value={feedback}
              onChangeText={setFeedback}
            />
            <View style={styles.buttonRow}>
              <Button title="Salvar" onPress={handleSave} color="#000" />
              <Button title="Excluir" onPress={deleteMark} color="#888" />
            </View>
          </Pressable>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#111',
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  calendarWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  calendar: {
    borderRadius: 10,
    overflow: 'hidden',
    width: 340,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000aa',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalDate: {
    textAlign: 'center',
    marginBottom: 12,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#f9f9f9',
    textAlignVertical: 'top',
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
});
