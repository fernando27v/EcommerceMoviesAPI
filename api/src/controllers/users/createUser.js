
const { User } = require("../../db.js");


const createUser = async (req, res) => {
  const {email} = req.params;
  const {nickname, name, lastName} = req.body;

  try {
    //Valido si el email o el username existen en la DB
    const user = await User.findOne({where:{email}});
    if(user){
      return res.status(200).json(user);
    }else{
      let user = await User.findOrCreate({
      where: { 
        email,
        nickname,
        name,
        lastName,
        email_verified: true
       },
    });
    return res.status(200).json(user);
    }
    

      
    
    
  } catch (error) {
    console.error(error);
    return 0;
  }
};

module.exports = createUser;