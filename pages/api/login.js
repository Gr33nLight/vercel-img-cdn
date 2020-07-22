const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const jwtId = process.env.JWT_ID;

export default (req, res) => {
  console.log(jwtSecret);
  if (req.method === 'POST' /*&& req.protocol?.toLowerCase() == 'https'*/) {
    try {
      const key = req.headers['x-authorization-key'];
      // TODO env
      if (key === jwtId) {
        const token = jwt.sign({ id: key }, jwtSecret, {
          expiresIn: 12000,
        });
        res.statusCode = 200;
        res.json({ token });
        console.log('token', token);
      } else {
        return res.status(401).end();
      }
    } catch (err) {
      //return res.status(401).json({ msg: err.message });
      return res.status(401).end();
    }
  } else {
    return res.status(401).end();
  }
};
