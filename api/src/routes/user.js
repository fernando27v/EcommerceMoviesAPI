const express = require("express");

const {
  getUsers,
  deleteUser,
  setRole,
  putUser,
  getUserByEmail,
  putEmailVerify,
} = require("../controllers/users/index");




const userRouter = express.Router();


//Crea un Usuario MRC

//userRouter.post("/", createUsers);

// Trae todos los usuarios
userRouter.get("/", getUsers);


userRouter.delete("/delete", deleteUser);

userRouter.put("/set-role", setRole);
userRouter.put("/:email", putUser);
userRouter.get('/:email', getUserByEmail);
userRouter.put("/email-verify/:email", putEmailVerify)

module.exports = userRouter;
