const router = require("express").Router();
const asyncHandler = require("../middlewares/asyncRouteHandler");
const joiValidator = require("../../helpers/joiValidator.helper");
const donationsService = require("../../services/donation.services");
const donationSchemas = require("../../helpers/validators/donation.validators");
const apiResponse = require("../../helpers/responseSender.helper");
const { deleteDoner } = require("../../services/donation.services");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const donations = await donationsService.getAllDonations(req.query);
    return apiResponse.sendSuccessResponse(
      res,
      donations,
      "Donations found successfully"
    );
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { error } = donationSchemas.donationSchema.validate(req.body);

    if (error) {
      return apiResponse.sendValidationError(res, error.details[0].message);
    }
    const { donationBy } = req.body;

    const doner = await donationsService.getDoner(donationBy);

    if (!doner)
      return apiResponse.sendValidationError(res, ["Doner not found"]);

    const newDonation = await donationsService.createDonation(req.body);
    return apiResponse.sendSuccessResponse(
      res,
      newDonation,
      "Donation added successfully"
    );
  })
);

router.put(
  "/:donationId",
  asyncHandler(async (req, res) => {
    const { error } = donationSchemas.donationSchema.validate(req.body);

    if (error) {
      return apiResponse.sendValidationError(res, error.details[0].message);
    }
    const { donationBy } = req.body;

    const doner = await donationsService.getDoner(donationBy);

    if (!doner)
      return apiResponse.sendValidationError(res, ["Doner not found"]);

    const updatedDonation = await donationsService.updateDonation(
      req.params.donationId,
      req.body
    );

    if (!updatedDonation)
      return apiResponse.sendValidationError(res, ["Donation not found"]);

    return apiResponse.sendSuccessResponse(
      res,
      updatedDonation,
      "Donation updated successfully"
    );
  })
);

router.delete(
  "/:donationId",
  asyncHandler(async (req, res) => {
    const { donationId } = req.params;

    const deletedDonation = await donationsService.deleteDonation(donationId);

    if (!deletedDonation)
      return apiResponse.sendValidationError(res, ["Donation not found"]);

    return apiResponse.sendSuccessResponse(
      res,
      deletedDonation,
      "Donation deleted successfully"
    );
  })
);

router.get(
  "/doner",
  asyncHandler(async (req, res) => {
    const doners = await donationsService.getAllDoners(req.query);

    return apiResponse.sendSuccessResponse(
      res,
      doners,
      "Doners found successfully"
    );
  })
);

router.post(
  "/doner",
  asyncHandler(async (req, res) => {
    const { error } = donationSchemas.donerSchema.validate(req.body);

    if (error) {
      return apiResponse.sendValidationError(res, error.details[0].message);
    }

    const doner = await donationsService.createDoner(req.body);

    return apiResponse.sendSuccessResponse(
      res,
      doner,
      "Doner created successfully"
    );
  })
);

router.put(
  "/doner/:donerId",
  asyncHandler(async (req, res) => {
    const { error } = donationSchemas.donerSchema.validate(req.body);

    if (error) {
      return apiResponse.sendValidationError(res, error.details[0].message);
    }

    const updatedDoner = await donationsService.updateDoner(
      req.params.donerId,
      req.body
    );

    if (!updatedDoner)
      return apiResponse.sendValidationError(res, ["Doner not found"]);

    return apiResponse.sendSuccessResponse(
      res,
      updatedDoner,
      "Doner updated successfully"
    );
  })
);

router.delete(
  "/doner/:donerId",
  asyncHandler(async (req, res) => {
    const { donerId } = req.params;

    const donations = await donationsService.getAllDonations({
      donationBy: donerId,
    });
    if (donations.length)
      return apiResponse.sendValidationError(res, [
        "Please delete doner's donations first",
      ]);

    const deletedDoner = await donationsService.deleteDoner(req.params.donerId);

    if (!deletedDoner)
      return apiResponse.sendValidationError(res, ["Doner not found"]);

    return apiResponse.sendSuccessResponse(
      res,
      deletedDoner,
      "Doner deleted successfully"
    );
  })
);

module.exports = router;
