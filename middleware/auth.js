import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    // check for token
    let token = req.header("Authorization");
    if (!token) {
      return res.status(403).send("Access Denied");
    }

    // verify token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
