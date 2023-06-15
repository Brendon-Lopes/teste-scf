const data = require("./fakeData");

module.exports = function (req, res) {
    const { name } = req.query;
    const queryNameLowerCase = name.toLowerCase();

    if (!queryNameLowerCase) {
        return res.status(400).send({ error: "query parameter 'name' is required" });
    }

    // procurar por nome exato para não haver exclusão acidental
    const index = data.findIndex((item) => item.name.toLowerCase() === queryNameLowerCase);

    if (index !== -1) {
        data.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send({ error: "User not found" });
    }
};