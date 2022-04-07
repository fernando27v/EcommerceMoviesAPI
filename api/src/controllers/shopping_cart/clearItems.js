const { Movie, Actor, Genre, shopping_cart } = require("../../db.js");
const { Op } = require('sequelize')
const Cookies = require('cookies')
module.exports = {

    clearItems: async (req, res) => { 

    const {id }= req.params.userId
     shopping_cart.destroy({
        where: { userId: id, status: 'cart' },
    })
        .then(() => {
            return res.status(200).send("cart deleted");
        })
        .catch(err => res.send(err));
}

/* 
    clearItems: async (req, res) => {  
        const { UserId } = req.body;
        const { MovieId } = req.params
        shopping_cart.destroy({
            where: { UserId: UserId, MovieId: MovieId }
        }).then(res => res.status(200).json(res))
            .catch(err => res.send(err))
    } */
}

