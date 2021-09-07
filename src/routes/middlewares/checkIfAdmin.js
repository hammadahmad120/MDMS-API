const db = require('../../database/models/index');
const Role = db.Role;

checkIfAdmin = (req, res, next) => {

    Role.findOne({
        where: {
            id: req.roleId
        }
    }).then(role => {
        if (role && role.roleName == 'admin') {
            next();
        }
        else {

            res.status(400).send({
                message: 'Only Admin can access this route'
            })
        }
    });
};

module.exports = checkIfAdmin;