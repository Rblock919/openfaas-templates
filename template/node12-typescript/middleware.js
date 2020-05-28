const handler = require('./function/dist/handler');

const middleware = async function(req, res) {
  try {
    const response = await handler(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = middleware;
