const Joi = require("joi");

const schema = Joi.object({
        name: Joi.string().min(2).max(50).required().optional(),
        age: Joi.number().required().optional(),
        gender: Joi.string().valid('male', 'female', 'other').required().optional(),
        mobile: Joi.string().pattern(/^[0-9]{10}$/).required().optional(), // Assuming a 10 digit mobile number
        appointment_date: Joi.date().optional(),
        symptoms:Joi.string().min().max(50).required().optional(),
});

const Appintmentvalidation = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    console.log(error);
    return res.status(400).json({ error: error.details[0].message });
  } else {
    next();
  }
};

module.exports = Appintmentvalidation;