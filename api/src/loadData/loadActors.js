require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Actor, Movie, actor_movie } = require("../db.js");

const loadActors = async (req, res) => {
  let apiInfo = []
  let actorsDetail = ""
  let apiInfo1 = ""
  let apiInfo2 = ""

  try {
    const movies = await Movie.findAll();

    movies.forEach(async (m) => {
      const actors = await axios.get(
        `https://api.themoviedb.org/3/movie/${m.idApiMovies}/credits?api_key=${API_KEY}&language=en-US`
      );

      if (actors.data.cast[0] && actors.data.cast[1]) {
        actorsDetail = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/person/${actors.data.cast[0].id}?api_key=${API_KEY}&language=en-US`),
          axios.get(`https://api.themoviedb.org/3/person/${actors.data.cast[1].id}?api_key=${API_KEY}&language=en-US`)
        ])

        apiInfo1 = actorsDetail[0].data
        apiInfo2 = actorsDetail[1].data
        apiInfo = [apiInfo1, apiInfo2]
        apiInfo.forEach(async (el) => {
          try {
            await Actor.findOrCreate({
              where: {
                idApiMovies: el.id,
                name: el.name,
                profile_path: el.profile_path != null ? "https://image.tmdb.org/t/p/w500" + el.profile_path : null,
                birthday: el.birthday,
                place_of_birth: el.place_of_birth,
                biography: el.biography,
                popularity: el.popularity,
                deathday: el.deathday,
                imdb_id: "https://www.imdb.com/name/" + el.imdb_id,
                known_for_department: el.known_for_department,
              }
            });
            const p = await Movie.findOne({ where: { id: m.id } })
            const a = await Actor.findOne({ where: { idApiMovies: el.id } })
            await actor_movie.findOrCreate({ where: { ActorId: a.id, MovieId: p.id } })
          } catch (err) {
            console.error(err.message)
          }
        })

      } else if (!actors.data.cast[0]) {
        return
      } else if (actors.data.cast[0] && !actors.data.cast[1]) {
        actorsDetail = await axios.get(`https://api.themoviedb.org/3/person/${actors.data.cast[0].id}?api_key=${API_KEY}&language=en-US`)
        apiInfo1 = actorsDetail.data

        try {
          await Actor.findOrCreate({
            where: {
              idApiMovies: apiInfo1.id,
              name: apiInfo1.name,
              profile_path: apiInfo1.profile_path != null ? "https://image.tmdb.org/t/p/w500" + apiInfo1.profile_path : null,
              birthday: apiInfo1.birthday,
              place_of_birth: apiInfo1.place_of_birth,
              biography: apiInfo1.biography,
              popularity: apiInfo1.popularity,
              deathday: apiInfo1.deathday,
              imdb_id: "https://www.imdb.com/name/" + apiInfo1.imdb_id,
              known_for_department: apiInfo1.known_for_department,
            }
          });
          const p = await Movie.findOne({ where: { id: m.id } })
          const a = await Actor.findOne({ where: { idApiMovies: apiInfo1.id } })
          await actor_movie.findOrCreate({ where: { ActorId: a.id, MovieId: p.id } })
        } catch (err) {
          console.error(err.message)
        }

      }



    });


    res.send("Ok");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { loadActors };
