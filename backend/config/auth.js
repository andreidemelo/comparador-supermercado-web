import jwt from "jsonwebtoken";

export function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.sendStatus(401);

  jwt.verify(token, "secret", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

export function admin(req, res, next) {
  if (req.user.role !== "ADMIN") return res.sendStatus(403);
  next();
}
