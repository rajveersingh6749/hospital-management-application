const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/hospitalManagement");

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const appointmentRouter = require('./routes/appointment.route.js');
const doctorRouter = require('./routes/doctor.route.js');
const patientRouter = require('./routes/patient.route.js');

app.use('/appointments', appointmentRouter);
app.use('/doctors', doctorRouter);
app.use('/patients', patientRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});