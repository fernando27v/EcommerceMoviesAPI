const { Genre } = require("../../db");
const updateGenre = async ({ body: { id, name } }, res) => {
  try {
    const result = await Genre.update({ name }, { where: { id} });
    if(result[0]) res.send("Changed gender successfully");
    else res.status(404).send("Error in route PUT/api/genres");
  } catch (error) {
    console.error(error);
    res.status(404).send("Error in route PUT/api/genres");
  }
};
module.exports = { updateGenre };
