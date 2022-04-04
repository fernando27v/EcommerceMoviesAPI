const axios = require("axios");
const { Genre } = require("../db.js");

async function loadGenres() {
  let {
    data: { genres },
  } = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=4ec209a2aac7d23aba9a83b713409fab&language=en-US"
  );
  const crear = [...genres].forEach(async (e) => {
    await Genre.findOrCreate({ where: { id: e.id, name: e.name } });
  });

  return crear
}
module.exports = { loadGenres };
