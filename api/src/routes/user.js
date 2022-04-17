const express = require("express");

const {
  getUsers,
  deleteUser,
  setRole,
  putUser,
  findOrCreateUser,
  putEmailVerify,
  deletePassword
} = require("../controllers/users/index");




const userRouter = express.Router();





// Trae todos los usuarios
userRouter.get("/", getUsers);


userRouter.delete("/delete", deleteUser);

userRouter.put("/set-role", setRole);
userRouter.put("/:email", putUser);
userRouter.post('/:email', findOrCreateUser);
userRouter.put("/email-verify/:email", putEmailVerify)
userRouter.delete("/delete-password", deletePassword);

module.exports = userRouter;
