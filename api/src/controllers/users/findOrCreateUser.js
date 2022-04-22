const { User } = require("../../db.js");

const findOrCreateUser = async (req, res) => {
    const {email} = req.params;
  const {nickname, name, lastName} = req.body;

  try {
    //Valido si el email o el username existen en la DB
    if(email === undefined || email === "undefined"){
      return res.status(200).json({});
    }else{
    const user = await User.findOne({where:{email}});
    if(user){
      return res.status(200).json(user);
    }else{
     await User.create({
        email,
        nickname,
        name,
        lastName,
        email_verified: true
    });
    
    const user = await User.findOne({where:{email}})
    return res.status(200).json(user);
    }
    
  }
      
    
    
  } catch (error) {
    console.error(error);
    return 0;
  }
}

module.exports = findOrCreateUser;