const db = require("../database/models/index");
const dbQueryHelper = require("../helpers/dbQueryHelper");
const Donation = db.Donation;
const DonationPerson = db.DonationPerson;

module.exports = {
  getAllDonations: async (query) => {
    const donation = await Donation.findAll({
      include: [DonationPerson],
      where: query,
      raw: true,
    });
    return donation;
  },

  createDonation: async (donation) => {
    const response = await Donation.create(donation);
    return response;
  },

  updateDonation: async (donationId, data) => {
    const [count, updatedDonation] = await Donation.update(data, {
      where: {
        id: donationId,
      },
      returning: true,
    });

    if (count) return updatedDonation;
    return null;
  },

  deleteDonation: async (donationId) => {
    const deletedDonation = await dbQueryHelper.deleteRow(
      Donation,
      "id",
      donationId
    );
    if (deletedDonation) return deletedDonation;
    return null;
  },

  getAllDoners: async (query) => {
    const doners = await DonationPerson.findAll({
      where: query,
    });
    return doners;
  },

  getDoner: async (id) => {
    const doner = await DonationPerson.findOne({
      where: {
        id: id,
      },
    });
    if (doner) return doner.get();
    return null;
  },

  createDoner: async (data) => {
    const doner = await DonationPerson.create(data);
    return doner;
  },

  updateDoner: async (donerId, data) => {
    const [count, updatedDoner] = await DonationPerson.update(data, {
      where: {
        id: donerId,
      },
      returning: true,
    });

    if (count) return updatedDoner;
    return null;
  },

  deleteDoner: async (donerId) => {
    const deletedDoner = await dbQueryHelper.deleteRow(
      DonationPerson,
      "id",
      donerId
    );
    if (deletedDoner) return deletedDoner;
    return null;
  },
};
