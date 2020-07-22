const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const jwtId = process.env.JWT_ID;
const fileSystem = require('fs');
const path = require('path');
export default (req, res) => {
  //https://github.com/vercel/next.js/issues/8251

  if (req.method === 'GET' /*&& req.protocol?.toLowerCase() == 'https'*/) {
    try {
      const token = req.headers['x-authorization-token'];
      const img = req.headers['x-authorization-img'];

      // TODO env
      jwt.verify(token, jwtSecret, function (err, decoded) {
        console.log(__filename);
        if (!err && decoded.id == jwtId) {
          return res.json({ mgs: 'ok' });
        } else {
          console.log('aaa');
          return res.status(401).end();
        }
      });
    } catch (err) {
      console.log(err);
      //return res.status(401).json({ msg: err.message });
      return res.status(401).end();
    }
  } else {
    return res.status(401).end();
  }
};
