const db = require("../database/models/index");

module.exports = {
  markCheckIn: async (checkInTime) => {
    await sleep(1000);
    function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }
    return {
      checkInTime: checkInTime,
      isApproved: false,
    };
  },
};
