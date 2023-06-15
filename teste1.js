var data = require("./fakeData");

const getUser = (req, res, next) => {
    const { name } = req.query;
    const queryNameLowerCase = name.toLowerCase();

    var user = data.find((user) => user.name.toLowerCase().includes(queryNameLowerCase));

    if (user !== undefined) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
};

const getUsers = (req, res, next) => {
    res.status(200).json(data);
};

module.exports = {
    getUser,
    getUsers
};