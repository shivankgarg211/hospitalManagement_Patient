const connection = require("../../Model/bd");
const { sendMail } = require("../../NodeMailer/Mailer");


const BookAppointment =  (req, res) => {
  try {
    const { name, mobile, gender, age, symptoms, appointment_date, email } =
      req.body;
    const psqlQuerry =
      `INSERT INTO tbl_hsptl_appointment (name, mobile, gender, age, symptoms, appointment_date, email) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    connection.query(
      psqlQuerry,
      [name, mobile, gender, age, symptoms, appointment_date, email],
      (error, result) => {
        if (error) {
                console.log("Error", error.message);
                res.status(500).json({ error: error.sqlMessage });
              } else {
                console.log(result);
        
                // Send confirmation email
                try {
                   sendMail(email, 'Appointment Confirmation', `Dear ${name}  your appointment has been booked successfully for ${appointment_date} .`);
                  res.json({ message: 'Appointment booked and confirmation email sent', result });
                } catch (mailError) {
                  console.error('Error sending email', mailError);
                  res.status(500).json({ message: 'Appointment booked but failed to send confirmation email', result });
                }
              }
            });
          } catch (error) {
            console.log("Error", error.message);
            res.status(500).json({ error: error.sqlMessage });
          }
        };
        
        module.exports = { BookAppointment };