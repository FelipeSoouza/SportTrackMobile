# 🥋 SportTrack

**SportTrack** é um aplicativo mobile focado no registro, acompanhamento e visualização de treinos de esportes como **Jiu-Jitsu** e **Muay Thai**.

Este projeto foi desenvolvido com fins acadêmicos e educativos, utilizando tecnologias modernas e estrutura modular para aprendizado prático em desenvolvimento mobile e backend com Node.js.

---

## 🚀 Tecnologias Utilizadas

### 📱 **Frontend - React Native com Expo**
- **Navegação:** `@react-navigation/native` e `native-stack`
- **Estilo:** inspirado em UIs modernas, com foco em minimalismo (preto e branco)
- **Pastas:** `screens`, `styles`, `scripts`, `assets`
- **Componentes principais:**
  - **Login:** imagem personalizada (kimono), campos estilizados
  - **Registro:** email, senha e seleção de esporte
  - **Home:** menu hambúrguer com seleção de esporte e histórico
  - **Calendário:** com `react-native-calendars`, visualiza e marca treinos
  - **Histórico:** exibe feedbacks registrados
  - **Estatísticas:** (em desenvolvimento)
- **Integração com API:** via `api.js` (métodos GET/POST por tipo de dado)

### 🌐 **Backend - Node.js + Express + MongoDB**
- **Framework:** Express.js
- **Banco de dados:** MongoDB Atlas (com `mongoose`)
- **Estrutura:** `controllers`, `models`, `routes`
- **Rotas:**
  - `POST` e `GET` para `/users`, `/feedbacks`, `/trainings`
- **Coleções:** `users`, `feedbacks`, `trainings`

---

## 📊 Funcionalidades Atuais

- Autenticação de login (ainda sem JWT)
- Registro de feedbacks por dia, exibidos no calendário
- Escolha de esporte afeta as rotas e visualizações
- Layouts responsivos e estilizados de forma consistente
- Dados sincronizados entre app e backend (MongoDB Atlas)

---

## 📌 Próximos Passos

- [ ] Corrigir conexão com backend via Axios (autorização/token)
- [ ] Implementar autenticação com JWT
- [ ] Desenvolver tela de Estatísticas com gráficos e análise
- [ ] Adicionar filtros por esporte, período e desempenho
- [ ] Melhorias visuais e responsividade
- [ ] Validações de formulário e mensagens de erro

---

## ⚙️ Banco de Dados

- Nome do projeto: `SportTrack`
- Banco: `sporttrackdb`
- Coleções: `users`, `feedbacks`, `trainings`
- Acesso via MongoDB Atlas com IP fixo e credenciais protegidas

---

## 📚 Sobre o Projeto

Este projeto é parte de uma iniciativa educacional e prática para aplicar conhecimentos em:
- Desenvolvimento mobile com React Native
- Conexão e consumo de APIs RESTful
- Integração com banco de dados NoSQL (MongoDB)
- Criação de interface amigável para registro de atividades físicas

---

## 📄 Licença

Este projeto é de uso acadêmico e pessoal. Sinta-se livre para estudar, modificar e contribuir com melhorias.

---

