const { HttpError } = require("../helpers");

const validateBodyFav = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, "missing field favorite"));
    }
    next();
  };
  return func;
};

module.exports = validateBodyFav;
