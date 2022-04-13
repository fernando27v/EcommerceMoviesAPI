const { Op } = require("sequelize");
const bcryptjs = require("bcryptjs");
const { User } = require("../../db.js");



const putUser = async (req, res) => {
    const { nickname,
        name,
        lastName,
        nationality,
        date_of_birth,
        email,
        password,
        role, email_Verified } = req.body;
    if (!nickname || !name || !lastName || !nationality || !date_of_birth || !email || !password || !role || email_Verified) {
        res.status(400).send("You must complete all fields ");
    }
    User.findByPk(req.params.id)
        .then((u) => {
            u.update({
                nickname,
                name,
                lastName,
                nationality,
                date_of_birth,
                email,
                password,
                role,
                email_Verified
            });
        })
        .then(() => {
            res.send("The User has been Updated");
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};


module.exports = putUser;