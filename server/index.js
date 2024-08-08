const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

const appointment = require("./Route/Appointment/tbl_hsptl_appointment");
const { BookAppointment } = require("./Controller/Appintment/tbl_hsptl_appointment");
app.use('/',BookAppointment)

const port = process.env.PORT
app.listen(port, () => {
        console.log(`connection established ${port}`);
      });