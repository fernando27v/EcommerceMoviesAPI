const { Actor, Movie } = require("../db.js");
const { Op } = require("sequelize");

module.exports = {
  searchBar: async (req, res) => {
    const name = req.query.name;
    const response = [];
    if (name) {
      try {
        //Estaría bueno cambiar esto por un promiseAll para optimizarlo
        const actor = await Actor.findAll({
          where: { name: { [Op.iLike]: `%${name.trim()}%` } },
          include: [{ model: Movie }],
        });
        const movie = await Movie.findAll({
          where: { title: { [Op.iLike]: `%${name.trim()}%` } },
          include: [{ model: Actor }],
        });

        if (movie.length > 0) {
          movie.map((m) => response.push(m));
        }
        if (actor.length > 0) {
          actor.map((a) => response.unshift(a));
        }

        res.json(response);
        return;
      } catch (error) {
        console.error(error);
        return 0;
      }
    }
  },
};
