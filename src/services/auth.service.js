const db = require('../database/models/index');
const User = db.User;
const bcrypt = require('bcryptjs');

authenticate = async (username, password) => {
    var user = await User.findOne({
        where: {
            username: username
        },
        raw: true,
        nest: true,
        include: [db.Role],
    });
    if (user && await bcrypt.compare(password, user.password)) {
        return user;
    }else {
        throw new Error('Invalid Username or Password');
    }
}

module.exports = { authenticate };