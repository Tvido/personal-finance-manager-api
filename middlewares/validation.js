const validation = (schema) => {
  const validFunc = (req, res, next) => {
    console.log(schema);
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    next();
  };

  return validFunc;
};

module.exports = validation;

// const ErrorException = require("../exceptions/error.exception");

// const validation = (schema) => async (req, res, next) => {
//   try {
//     await schema.validateAsync(req.body, { abortEarly: false });
//     return next();
//   } catch (e) {
//     next(ErrorException.ValidationError(e.details));
//   }
// };

// module.exports = validation;
