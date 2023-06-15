const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Token not found" });
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    // deve conter um token jwt com 'secret' como segredo.
    const data = jwt.verify(token, "secret");

    // usuário deve ter a role 'admin' dentro do payload do token.
    const { role } = data;

    if (role !== "admin") {
      return res.status(401).json({ error: "Unauthorized user" });
    }

    return next();
  } catch {
    return res.status(401).send();
  }
}