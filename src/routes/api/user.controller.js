const router = require("express").Router();
const userService = require("../../services/user.service.js");
const checkIfAdmin = require("../middlewares/checkIfAdmin");
const userSchemas = require("../../helpers/validators/user.validators");
const apiResponse = require("../../helpers/responseSender.helper");

router.post("/addNewUser", checkIfAdmin, async (req, res) => {
  const { error } = userSchemas.userRequestSchema.validate(req.body);
  if (error) {
    return apiResponse.sendValidationError(res, [error.details[0].message]);
  } else {
    try {
      const status = await userService.addNewUser(req.body);
      return apiResponse.sendSuccessResponse(res, null, 'User Added Successfully');
    } catch (e) {
      return apiResponse.sendErrorResponse(res, e.message, e.code);
    }
  }
});

router.get("/", (req, res) => {
  const users = [
    {
      id: 1,
      name: "umer",
      age: "24",
    },
    {
      id: 2,
      name: "ali",
      age: "22",
    },
    {
      id: 3,
      name: "khan",
      age: "20",
    },
    {
      id: 4,
      name: "Shan",
      age: "14",
    },
  ];
  res.json(users);
});

module.exports = router;
