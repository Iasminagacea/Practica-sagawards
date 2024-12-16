const express = require('express');
const router = express.Router();
const nominationController = require('../controllers/nominationController');

router.get('/', nominationController.getAllNominations);
router.post('/', nominationController.createNomination);
router.get('/:id', nominationController.getNominationById);
router.put('/:id', nominationController.updateNomination);
router.delete('/:id', nominationController.deleteNomination);

module.exports = router;