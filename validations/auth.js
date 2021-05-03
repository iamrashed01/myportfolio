const Joi = require("joi");

module.exports.registerValidator = (req) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
    profession: Joi.string().required(),
    description: Joi.string().required(),
  });
  return schema.validateAsync(req);
};

module.exports.loginValidator = (req) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
  });
  return schema.validateAsync(req);
};
