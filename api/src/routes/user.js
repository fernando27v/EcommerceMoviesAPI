const express = require("express");
const { check } = require("express-validator");
const {
  getUsers,
  createUser,
  loginUser,
  deleteUser,
  setRole,
} = require("../controllers/users/index");
const validateFields = require("../middlewares/validateFields");
const validateJWT = require("../middlewares/validateJWT");
const isAdmin = require("../middlewares/isAdmin");
const putUser = require("../controllers/users/putUser");
const getUserById = require("../controllers/users/getUserById");

const userRouter = express.Router();


//Crea un Usuario MRC

//userRouter.post("/", createUsers);

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

userRouter.delete("/delete", deleteUser);

userRouter.put("/set-role", setRole);
userRouter.put("/:id", putUser);
userRouter.get('/:id', getUserById)

module.exports = userRouter;
