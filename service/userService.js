const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");
const userModel = require("../models/userModel");
module.exports = {
  createUser: async (body) => {
    try {
      const isUser = await userModel.getUser(false, body.userName);
      if (isUser.error || isUser.response) {
        return { error: "user already exists" };
      }
      body.password = await hash(body.password, 10);
      body.userID = uuid();
      const user = await userModel.createUser(body);
      // console.log(user);
      if (user.error) {
        return {
          error: user.error,
        };
      }
      delete user.response.dataValues.password;
      return { response: user.response.dataValues };
    } catch (error) {
      return { message: error.message };
    }
  },
  getAllUser: async () => {
    try {
      const users = await userModel.getAllUsers();
      if (users.error) {
        return error.message;
      }
      return { response: users.response };
    } catch (error) {
      return { message: error.message };
    }
  },
  deleteUser: async (userId) => {
    try {
      const deleteUser = await userModel.deleteUser(userId);
      console.log(deleteUser);
      if (deleteUser.error || !deleteUser.response) {
        return {
          error: {
            message: "unable to delete",
            error: deleteUser?.error || deleteUser.response,
          }, //optional chaining means short form of ternery operator
        };
      }
      return {
        response: { message: "user Deleted!", response: deleteUser.response },
      };
    } catch (error) {
      return { error: error };
    }
  },
};