const { User } = require("../../db.js");



const putUser = async (req, res) => {
    const { nickname,
        name,
        lastName,
        nationality,
        date_of_birth,
        } = req.body;
   
    User.findOne({where :{email:req.params.email}})
        .then((u) => {
            u.update({
                nickname,
                name,
                lastName,
                nationality,
                date_of_birth,
            });
        })
        .then(() => {
            res.json({msg:"The User has been Updated"});
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};


module.exports = putUser;