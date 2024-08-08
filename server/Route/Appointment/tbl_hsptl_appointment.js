const express = require ('express');
const appointment = express.Router();

const {BookAppointment} = require('../../Controller/Appintment/tbl_hsptl_appointment')

appointment.post("/api/patient/appointment",BookAppointment);

module.exports = appointment