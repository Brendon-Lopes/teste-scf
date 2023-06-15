const queriesCount = require("./queriesCount");
const fakeData = require("./fakeData");

module.exports = function (req, res) {
    const { name } = req.query;
    const queryNameLowerCase = name.toLowerCase();

    const user = fakeData.find((user) => user.name.toLowerCase().includes(queryNameLowerCase));

    if (user) {
        const message = `${user.name} foi lido ${queriesCount[user.name] ?? 0} vezes.`;

        res.status(200).json({ message });
    } else {
        res.status(404).json({ error: "User not found" });
    }

    res.send("Usuário " + name + " foi lido 0 vezes.");
};