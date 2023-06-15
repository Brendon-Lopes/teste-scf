const data = require("./fakeData");

module.exports = function (req, res) {
    const { id } = req.query
    const { name, job } = req.body;

    const user = data.find(user => user.id === Number(id));

    if (user) {
        user.name = name;
        user.job = job;

        res.status(200).send(user);
    } else {
        res.status(404).send({ error: "User not found" });
    }
};