const router = require("express").Router();
const jwt = require("jsonwebtoken");
const config = require("../../configs/config");
const authService = require("../../services/auth.service");
const userSchemas = require("../../helpers/validators/user.validators");
const apiResponse = require("../../helpers/responseSender.helper");

router.post("/login", async (req, res) => {
  const { error } = userSchemas.userCredentialsSchema.validate(req.body);

  if (error) {
    return apiResponse.sendValidationError(res, error.details[0].message);
  }

  try {
    const user = await authService.authenticate(
      req.body.username,
      req.body.password
    );
    delete user['password'];
    
    jwt.sign({ user }, config.secret, { expiresIn: "8h" }, (err, token) => {
      const { id, ...respObj } = user;
      respObj.userId = user.id;
      respObj.token = token;
      return apiResponse.sendSuccessResponse(res, respObj, 'Authenticated Succesfully');
    });
  } catch (e) {
    return apiResponse.sendErrorResponse(res, e.message);
  }
});

module.exports = router;
