// const route = require("express").Router()
// const  {createUser}=require("../controller/userController")

// route.post("/createUser", createUser)

// module.exports=route;

const route = require("express").Router();
const {
  getAllUsers,
  createUser,
  deleteUser,
} = require("../controller/userController");

route.get("/getAllUsers", getAllUsers);
route.post("/createUser", createUser);
route.delete("/deleteUser", deleteUser);
// route.put("/updateUser", updateUser);

module.exports = route;