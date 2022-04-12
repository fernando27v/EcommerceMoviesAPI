const { Genre } = require("../db.js");
module.exports = {
  getGenres: async () => {
    try {
      return await Genre.findAll();
    } catch (error) {
      console.error(error);
      return 0;
    }
  },
  postGenre: async (name) => {
    try {
      await Genre.findOrCreate({ where: { name } });
    } catch (error) {
      console.error(error);
      return 0;
    }
  },
};
