const {Review,Movie} = require('../../db.js');

module.exports ={


getReviewsByUser :async (req, res) =>{

    const {userId} = req.params;
   try{
       const reviews = await Review.findAll({where: {UserId: userId},include: [{model: Movie}]});
         res.json(reviews)
   }catch(err){
       res.send(err.message)
   }


}

}