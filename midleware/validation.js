exports.validateKeys = (req, res, next) => {
  console.log(`We are validating the object we received`);
  const user = req.body;

  if (!user.firstName || !user.lastName || !user.age || !user.fbw || !user.email) {
    const error = new Error(`Looks like you are missing the required fields`);
    error.status = 400;
    next(error);
  }

  next();
};

exports.isAdult = (req, res, next) => {
  console.log(`We are checking the age`);
  const { age } = req.body;

  if (parseInt(age) < 18) {
    const error = new Error(`Why are so young, get out of here...`);
    error.status = 400;
    next(error);
  }

  next();
};

exports.isPart = (req, res, next) => {
  console.log(`We are validating the object we received`);
  const { fbw } = req.body;

  if (fbw !== '36') {
    const error = new Error(`Not part of fbw`);
    error.status = 400;
    next(error);
  }

  next();
};
