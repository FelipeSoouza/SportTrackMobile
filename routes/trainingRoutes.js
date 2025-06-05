const express = require('express');
const router = express.Router();
const Training = require('../models/Training');

router.get('/', async (req, res) => {
  const trainings = await Training.find();
  res.json(trainings);
});

router.post('/', async (req, res) => {
  const { date, sport, notes } = req.body;
  const training = new Training({ date, sport, notes });
  await training.save();
  res.status(201).json(training);
});

module.exports = router;
