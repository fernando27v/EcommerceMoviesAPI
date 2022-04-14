const { User } = require("../../db.js");



const putEmailVerify = async (req, res) => {

   
 const us =  await User.findOne({where :{email:req.params.email}})

 if(us.email_verified === false){
    us.update({
        email_verified:true,
    });
    res.json({msg:"The User email has been verified"});
 }else{
    res.json({msg:"The user's email was already verified"});
 }
        
};


module.exports = putEmailVerify;