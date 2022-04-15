const connection = require("../connection");
const querystring = require("querystring");

module.exports.findAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = "SELECT * FROM todos";
  connection.query(query, (error, rows) => {
    if (error) {
      callback({ statusCode: 500, body: JSON.stringify(error) });
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          todos: rows,
        }),
      });
    }
  });
};
