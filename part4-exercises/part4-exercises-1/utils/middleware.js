const morgan = require("morgan");
const logger = require("./logger");

morgan.token("body", (request) => JSON.stringify(request.body));
const middlewareLogger = morgan(`
  Method: :method
  Path - Status - Response Time: :url :status :response-time
  Body: :body
`);

const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === "CaseError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }
};

module.exports = {
  middlewareLogger,
  errorHandler,
};
