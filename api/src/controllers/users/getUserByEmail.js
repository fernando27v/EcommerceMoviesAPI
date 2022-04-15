const { User } = require("../../db.js");

const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params
        const user = await User.findOne({
            where: { email: email },
        });

        res.json(user)

    } catch (error) {
        console.error(error);
        return 0;
    }

}

module.exports = getUserByEmail;