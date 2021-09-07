const router = require("express").Router();
const asyncHandler = require("../middlewares/asyncRouteHandler");
const joiValidator = require("../../helpers/joiValidator.helper");
const attendanceService = require("../../services/attendance.service.js");
const attendanceSchemas = require("../../helpers/validators/attendance.validators");
const apiResponse = require("../../helpers/responseSender.helper");

router.post(
  "/checkIn",
  asyncHandler(async (req, res) => {
    const errMsgs = joiValidator(
      req.body,
      attendanceSchemas.markAttendanceSchema
    );
    if (errMsgs) {
      return apiResponse.sendValidationError(res, errMsgs);
    }

    const markTime = await attendanceService.markCheckIn(req.body.markTime);

    return apiResponse.sendSuccessResponse(
      res,
      markTime,
      "Check in time added"
    );
  })
);

module.exports = router;
