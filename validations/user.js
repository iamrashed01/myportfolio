const Joi = require("joi");

module.exports.updateProfileValidator = (req) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    profession: Joi.string().required(),
    description: Joi.string().required(),
  });
  return schema.validateAsync(req);
};
