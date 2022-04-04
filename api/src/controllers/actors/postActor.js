const {Actor} = require("../../db.js");


module.exports = {
  postActor: async (req,res) => {
    try {
        let {name, biography,birthday,profile_path,place_of_birth,deathday,imdb_id,known_for_department,popularity} = req.body;
        
        const a =  await Actor.create({
            name,
            profile_path,
            birthday,
            place_of_birth,
            biography,
            popularity,
            deathday,
            imdb_id,
            known_for_department,
           });

      res.json(a);
    } catch (error) {
      console.log(error)
      res.json({error});
      return 0;
    }
  }
};