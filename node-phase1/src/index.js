const math = require("./math");
const logger = require("./logger");

logger.logInfo("Program started");

const a = 10;
const b = 5;

logger.logInfo(`add: ${math.add(a, b)}`);
logger.logInfo(`sub: ${math.sub(a, b)}`);
logger.logInfo(`mul: ${math.mul(a, b)}`);
logger.logInfo(`div: ${math.div(a, b)}`);

logger.logInfo("Program finished");
