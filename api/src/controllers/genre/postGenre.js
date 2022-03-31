const { Genre } = require("../../db");
const postGenre = async ({ body: { id, name } }, res) => {
  try {
    const result = await Genre.findOrCreate({ where: { id, name } });
    if (result[1]) res.send("Genre created successfully");
    else res.send("Error in route /genres");
  } catch (error) {
    console.error(error);
    res.status(404).send("Error in route /genres");
  }
};
module.exports = { postGenre };
