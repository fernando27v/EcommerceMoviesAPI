const axios = require("axios");
const { Genre } = require("../db.js");

const loadGenres = async (req, res) => {
  let {
    data: { genres },
  } = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=4ec209a2aac7d23aba9a83b713409fab&language=en-US"
  );
  const crear = [...genres].forEach(async (e) => {
    await Genre.findOrCreate({ where: { id: e.id, name: e.name } });
  });
<<<<<<< HEAD
  res.send("OK");
=======
  res.send("Ok");
>>>>>>> ea63c1ce937294055dc99f8abd4ce8621536699e
};
module.exports = { loadGenres };
