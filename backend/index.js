const express = require('express');
const dotenv = require('dotenv').config();
var cors = require('cors')
const port = process.env.PORT || 5000;

const app = express();

app.use(cors())


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));