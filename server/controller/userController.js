const mongoose = require("mongoose");
const User = require("../model/userModel");
const logger = require("../logger/logger");

// async function getUsers(req, res) {
//   try {
//     const allUsers = await User.find({}).select(
//       "-_id"
//     );
//     if (allUsers.length > 0) {
//       return res.status(200).send({
//         sucess: true,
//         message: "User Records Fetched Sucess",
//         data: allUsers
//       });
//     }
//     return res.status(400).send({
//       sucess: false,
//       message: "No Records Found",
//       data: allUsers
//     });
//   } catch (error) {
//     logger.error(error.stack);
//     return res.status(500).send({
//       success: false,
//       message: "Internal Server Error",
//       data: JSON.stringify(error)
//     });
//   }
// }
async function getUsers(req, res) {
  try {
    const allUsers = await User.find({}).select(
      "-_id"
    );
    return res.status(200).send({
      success: true,
      message:
        allUsers.length > 0
          ? "User Records Fetched Success"
          : "No Records Found",
      data: allUsers
    });
  } catch (error) {
    logger.error(error.stack);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      data: JSON.stringify(error)
    });
  }
}


async function addUserScript(req, res) {
  try {
    let userList = req.body.users;
    if (!userList) {
      return res.status(400).send({
        success: false,
        message: "Empty Payload",
        data: null
      });
    }
    let createdUserList = [];
    for (let user of userList) {
      let userCreateObj = {
        name: user.name,
        email: user.email,
        age: user.age
      };
      let data = await User.create(userCreateObj);
      if (data) createdUserList.push(data);
    }
    return res.status(200).send({
      success: true,
      message: "All users saved Success",
      data: createdUserList
    });
  } catch (error) {
    logger.error(error.stack);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      data: JSON.stringify(error)
    });
  }
}

async function getUserByEmail(req, res) {
  try {
    let { email } = req.params;
    let user = await User.findOne({
      email: email
    }).select("-_id");
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "No user found with that email",
        data: null
      });
    }
    return res.status(200).send({
      success: true,
      message: "User found  success",
      data: user
    });
  } catch (error) {
    logger.error(error.stack);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      data: JSON.stringify(error)
    });
  }
}

module.exports = {
  getUsers,
  addUserScript,
  getUserByEmail
};
