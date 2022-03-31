const express = require("express");
const { check } = require("express-validator");
const {
  getUsers,
  createUser,
  loginUser,
} = require("../controllers/users/index");
const { validateFields } = require("../middlewares/validateFields");

const userRouter = express.Router();

// Trae todos los usuarios
userRouter.get("/", getUsers);

// Registro de Usuario
userRouter.post(
  "/create",
  [
    //Middleware para validar campos
    check("name", "The name cannot be empty").not().isEmpty(),
    check("surname", "The surname cannot be empty").not().isEmpty(),
    check("password", "The password must be more than 8 characters").isLength({
      min: 8,
    }),
    check("email", "The email is not valid").isEmail(),
    check("role", "Not a valid role").isIn([
      "ADMIN_ROLE",
      "SUPER_ROLE",
      "USER_ROLE",
    ]),
    //Este custom middleware lanza un error en caso de que alguno de los checks fallara
    validateFields,
  ],
  createUser
);

// Login de Usuario
userRouter.post(
  "/login",
  [
    check("email", "The email is not valid").isEmail(),
    check("password", "The password must be more than 8 characters").isLength({
      min: 8,
    }),
    validateFields,
  ],
  loginUser
);

module.exports = userRouter;
