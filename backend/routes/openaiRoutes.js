const express = require('express');
const { generateImage, generateCompletion, generateEdit, generateRandomImage } = require('../controllers/openaiController')
const router = express.Router();

router.post('/generateImage', (generateImage));
router.post('/generateCompletion', (generateCompletion))
router.post('/generateEdit', (generateEdit))
router.get('/generateImage', (generateRandomImage))

module.exports = router;