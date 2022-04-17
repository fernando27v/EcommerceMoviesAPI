const getUsers = require("./getUsers");
const createUser = require("./createUser");
const loginUser = require("./loginUser");
const deleteUser = require("./deleteUser");
const setRole = require("./setRole");
const putUser = require("./putUser");
const findOrCreateUser = require("./findOrCreateUser");
const putEmailVerify = require("./putEmailVerify");
const deletePassword = require("./deletePassword");

module.exports = {
  getUsers,
  loginUser,
  deleteUser,
  setRole,
  putUser,
  findOrCreateUser,
  putEmailVerify,
  deletePassword
};
