const apiResponse = require("../../helpers/responseSender.helper");

const permit = (...permittedRolesIDs) => {
  return (req, res, next) => {
    const { roleName } = req.user.Role;
    if (!permittedRolesIDs.includes(roleName))
      return apiResponse.sendErrorResponse(res, "Forbidden!", 403);
    next();
  };
};

module.exports = permit;
