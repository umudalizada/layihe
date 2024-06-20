require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./src/routes/ticketRouters');
require('./src/config/db');  
const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});