// frontend/scripts/api.js
import axios from 'axios';
import { logger } from 'react-native-logs';

const log = logger.createLogger();

// Troque "localhost" pelo IP da sua máquina, ex: 192.168.0.100
const API_BASE_URL = 'http://172.20.10.4:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ================== USERS ==================

export async function getUsers() {
  const res = await api.get('/users');
  return res.data;
}

export async function createUser(userData) {
  const res = await api.post('/users', userData);
  return res.data;
}

// ================== FEEDBACKS ==================

export async function getFeedbacks() {
  const res = await api.get('/feedbacks');
  return res.data;
}

export async function saveFeedback(feedbackData) {
  try {
    log.debug(feedbackData);

    log.debug('Enviando feedback para:', `${API_BASE_URL}/feedbacks`);
    const res = await api.post('/feedbacks/', feedbackData);
    log.debug(res);
    log.debug('Resposta do backend:', res.data);
    return res.data;
  } catch (error) {
    log.debug(error);
    log.debug('Erro ao salvar feedback:', error.message);
    throw error;
  }
}

// ================== TREINOS ==================

export async function getTrainings() {
  const res = await api.get('/trainings');
  return res.data;
}

export async function saveTraining(trainingData) {
  const res = await api.post('/trainings', trainingData);
  return res.data;
}
