const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routerFeedback = require("./routes/feedbackRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/feedbacks", routerFeedback);
// http://localhost:3001/api/feedbacks/

// Substitua pelo seu link de conexão do MongoDB Atlas
mongoose.connect('mongodb+srv://felipe:Sport123@sporttrack.qlovplq.mongodb.net/sporttrackdb?retryWrites=true&w=majority')
  .then(() => console.log('✅ Conectado ao MongoDB'))
  .catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
