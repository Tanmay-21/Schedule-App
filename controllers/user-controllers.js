const HttpError = require('../models/http-error');
const { User } = require('../models');

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 * @returns {Object}
 */
const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, '-password');
  } catch (err) {
    const error = new HttpError('fetching users failed', 500);
    return next(error);
  }

  res.json({ users: users.map(user => user.toObject({ getters: true })) })
};

module.exports = {
  getUsers: getUsers
};
