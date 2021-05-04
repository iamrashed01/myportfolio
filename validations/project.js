const Joi = require("joi");

module.exports.projectValidator = (req) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    slug: Joi.string().required(),
    description: Joi.string().required(),
    markdown: Joi.string().required(),
  });
  return schema.validateAsync(req);
};
