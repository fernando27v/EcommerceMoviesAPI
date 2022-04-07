const {Review} = require('../../db.js');


module.exports ={


    postReview: (req,res) =>{
        const {userId} = req.params
       const {movieId,text,vote} = req.body

       if(text && vote){
           Review.create({
               text,
               vote,
               UserUid: userId,
               MovieId: movieId
           }).then(review => res.json(review))
           .catch(err => res.send(err.message))
       }else if(!text && vote){
        Review.create({
            vote,
            UserId: userId,
            MovieId: movieId
        }).then(review => res.json(review))
        .catch(err => res.send(err.message))
        }
    }

    }