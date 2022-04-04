require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Actor, Movie,actor_movie } = require("../db.js");

const loadActors = async (req, res) => {
   
    try {
        const movies = await Movie.findAll();

       movies.forEach(async (m)=> {
           const actors = await axios.get(`https://api.themoviedb.org/3/movie/${m.idApiMovies}/credits?api_key=${API_KEY}&language=en-US`)

       
              const actorsDetail = await Promise.all([
           axios.get(`https://api.themoviedb.org/3/person/${actors.data.cast[0].id}?api_key=${API_KEY}&language=en-US`),
           axios.get(`https://api.themoviedb.org/3/person/${actors.data.cast[1].id}?api_key=${API_KEY}&language=en-US`)
           ])

            apiInfo1 = actorsDetail[0].data
            apiInfo2 = actorsDetail[1].data

           apiInfo = [apiInfo1, apiInfo2]
              apiInfo.forEach(async (el) => {
              try{
                    await Actor.findOrCreate({where:{
                    idApiMovies:el.id,
                    name:el.name,
                    profile_path: el.profile_path != null ? "https://image.tmdb.org/t/p/w500" + el.profile_path : null,
                    birthday:el.birthday,
                    place_of_birth:el.place_of_birth,
                    biography:el.biography,
                    popularity:el.popularity,
                    deathday:el.deathday,
                    imdb_id:"https://www.imdb.com/name/" + el.imdb_id,
                    known_for_department:el.known_for_department,
                   }});
                   const p = await Movie.findOne({where:{id:m.id}})
                   const a = await Actor.findOne({where:{idApiMovies:el.id}})
                   await actor_movie.findOrCreate({where:{ActorId:a.id,MovieId:p.id}})
              }catch(err){
                  console.error(err.message)
              }
              
            });
             
       })


    
        res.send("Ok")

    }catch (error) {
        console.log(error.message);
    }
    

}


module.exports = { loadActors };