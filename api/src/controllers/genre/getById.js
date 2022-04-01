const { Genre } = require("../../db");
const getById = async ({ params: { id } }, res) => {
  try {
    const result = await Genre.findOne({ where: { id } });
    if (result) res.send(result);
    else res.status(404).send(`Error in route GET/api/genres/${id}`);
  } catch (error) {
    console.error(error);
    res.status(404).send(`Error in route GET/api/genres/${id}`);
  }
};
module.exports = { getById };
