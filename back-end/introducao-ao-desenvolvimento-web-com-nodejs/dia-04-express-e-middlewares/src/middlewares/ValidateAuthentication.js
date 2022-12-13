module.exports = (req, res, next) => {
  const { authorization  } = req.body.headers;
  
  if (!authorization.length === 16) {
    return res.status(401).json(
      { message: "Token inválido!"  },
    );
  }

  next();
};