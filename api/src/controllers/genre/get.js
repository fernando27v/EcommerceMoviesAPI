const { Sequelize } = require("sequelize");
const { Genre } = require("../../db");
const Op = Sequelize.Op;

const getGenres = async ({ params: { id }, query: { name } }, res) => {
  try {
    if (name) {
      const result = await Genre.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
      });
      if (result.length > 0) res.send(result);
      else
        res
          .status(400)
          .send(
            `Error in route GET/api/genres?name=${name} (There are no results for the search)`
          );
    } else if (id) {
      const result = await Genre.findOne({ where: { id } });
      if (result) res.send(result);
      else res.status(404).send(`Error in route GET/api/genres/${id}`);
    } else {
      const genres = await Genre.findAll();
      res.json(genres);
    }
  } catch (error) {
    console.error(error);
    res.status(404).send(`Error in route GET/api/genres/${id}`);
  }
};

module.exports = {
  getGenres,
};
