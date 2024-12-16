const Nomination = require('../models/nominationModel');

exports.getAllNominations = async (req, res) => {
  try {
    const nominations = await Nomination.findAll();
    res.json(nominations);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createNomination = async (req, res) => {
  const { year, category, full_name, show, won } = req.body;
  try {
    const newNomination = await Nomination.create({ year, category, full_name, show, won });
    res.status(201).json(newNomination);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getNominationById = async (req, res) => {
  const { id } = req.params;
  try {
    const nomination = await Nomination.findByPk(id);
    if (nomination) {
      res.json(nomination);
    } else {
      res.status(404).json({ message: 'Nomination not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateNomination = async (req, res) => {
  const { id } = req.params;
  const { year, category, full_name, show, won } = req.body;
  try {
    const nomination = await Nomination.findByPk(id);
    if (nomination) {
      nomination.year = year;
      nomination.category = category;
      nomination.full_name = full_name;
      nomination.show = show;
      nomination.won = won;
      await nomination.save();
      res.json(nomination);
    } else {
      res.status(404).json({ message: 'Nomination not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteNomination = async (req, res) => {
  const { id } = req.params;
  try {
    const nomination = await Nomination.findByPk(id);
    if (nomination) {
      await nomination.destroy();
      res.json({ message: 'Nomination deleted' });
    } else {
      res.status(404).json({ message: 'Nomination not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};