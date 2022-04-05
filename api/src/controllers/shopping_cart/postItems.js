const {shopping_card} = require("../../db")

module.exports ={
    
    postItems :(req,res) =>{
        const {UserId} = req.params;
        const {MovieId} = req.body;

        MovieId.forEach((m)=> {
        
        shopping_card.findOrCreate({
            UserId,
            MovieId: m
        }).then(()=>{
            res.status(200).json({
                message:"Item añadido al carrito"
            })
        }).catch(err =>{
            res.status(500).send({
                message:"Error al añadir item al carrito",
                err
            })
        })
        })
    }
}