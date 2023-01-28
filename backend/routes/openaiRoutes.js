const express = require('express');
const { generateImage, generateCompletion } = require('../controllers/openaiController')
const router = express.Router();

router.post('/generateImage', (generateImage));
router.post('/generateCompletion', (generateCompletion))


module.exports = router;