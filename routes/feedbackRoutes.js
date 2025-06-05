const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.get('/', async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
});

router.post('/', async (req, res) => {
    console.log("chegou no backend")
    const { date, text, sport } = req.body;

  console.log({
    date,
    text
  });

  const feedback = new Feedback({ date, comment: text, sport });
  await feedback.save();
  res.status(201).json(feedback);
});

module.exports = router;
