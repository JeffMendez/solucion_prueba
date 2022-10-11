require('rootpath')();
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/usuarios', require('./controllers/ejempl1.controller'));
app.use('/vehiculos', require('./controllers/vehiculo.controller'));
app.use('/personal', require('./controllers/personal.controller'));

app.listen(process.env.PORT, () => console.log('Server listening on port ' + process.env.PORT));