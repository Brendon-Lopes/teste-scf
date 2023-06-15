const data = require("./fakeData");

module.exports = function (req, res) {
    const { name, job } = req.body;

    const newUser = {
        id: data.length + 1, // simulando o auto increment de um banco de dados.
        name,
        job,
    };

    data.push(newUser);
    res.status(201).json(newUser);
};