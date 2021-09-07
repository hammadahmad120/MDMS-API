//business logic
//communicate with db
//send res back to controller to pass to client
const bcrypt = require("bcryptjs");
const ExceptionWithStatusCode = require("../helpers/exceptionObjectCreator.helper");
const db = require("../database/models/index");
const User = db.User;

addNewUser = async (requestObj) => {
  var duplicateUser = await User.findOne({
    where: {
      username: requestObj.username,
    },
  });
  if (duplicateUser) {
    throw new ExceptionWithStatusCode(409, "Duplicated user");
  } else {
    var createdUser = await User.create({
      username: requestObj.username,
      password: bcrypt.hashSync(requestObj.password, 8),
      firstName: requestObj.firstName,
      lastName: requestObj.lastName,
      phone: requestObj.phone,
      address: requestObj.address,
      roleId: requestObj.roleId,
    });
    if (createdUser) {
      return true;
    }
    throw new Error("User could not be added");
  }
};

module.exports = { addNewUser };
