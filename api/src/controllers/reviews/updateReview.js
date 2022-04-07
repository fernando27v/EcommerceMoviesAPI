const {Review} = require("../../db")

module.exports ={


    updateReview: (req,res) =>{
        const {reviewId} = req.params;
        const {vote,text} = req.body;

        if(vote && text){
            Review.update({
                vote: vote,
                text: text
        },{
            where: {
                id: reviewId
            }
        })
        .then(() => res.status(200).send("Review updated"))
        .catch(err => res.send(err.message))
        }else if(vote && !text){
            Review.update({
                vote: vote
        },{
            where: {
                id: reviewId
            }
        })
        .then(() => res.status(200).send("Review updated"))
        .catch(err => res.send(err.message))
        }else if(!vote && text){
            Review.update({
                text: text
        },{
            where: {
                id: reviewId
            }
        })
        .then(() => res.status(200).send("Review updated"))
        .catch(err => res.send(err.message))
        }else{
            res.status(400).send("Please provide at least one of the following: Vote, comment")
        }
        
    }
    
    }