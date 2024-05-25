const route = require("express").Router()
const  {createUser}=require("../controller/userController")

route.post("/createUser", createUser)

module.exports=route;