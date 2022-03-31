const { Genre } = require("../../db");

const deleteGenre = async ({ params: { id } }, res) => {
  try {
    const result = await Genre.destroy({ where: { id: id } });
    if (result) res.send("Genre removed successfully");
    else res.status(404).send(`Error in route DELETE/api/genres/${id}`);
  } catch (error) {
    console.error(error);
    res.status(404).send(`Error in route DELETE/api/genres/${id}`);
  }
};
module.exports = { deleteGenre };
