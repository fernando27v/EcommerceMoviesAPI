const { Op } = require("sequelize");
const bcryptjs = require("bcryptjs");
const { User, user } = require("../../db.js");

const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const mov = await User.findOne({
            where: { id: id },
        });

        if (!mov) {
            res.json({
                message: "There is no movie with this id " + id
            })
        }
        res.json(mov)

    } catch (error) {
        console.error(error);
        return 0;
    }

}

module.exports = getUserById;