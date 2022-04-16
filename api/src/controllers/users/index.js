const getUsers = require("./getUsers");
const createUser = require("./createUser");
const loginUser = require("./loginUser");
const deleteUser = require("./deleteUser");
const setRole = require("./setRole");
const putUser = require("./putUser");
const getUserByEmail = require("./getUserByEmail");
const putEmailVerify = require("./putEmailVerify");
const deletePassword = require("./deletePassword");

module.exports = {
  getUsers,
  createUser,
  loginUser,
  deleteUser,
  setRole,
  putUser,
  getUserByEmail,
  putEmailVerify,
  deletePassword
};
