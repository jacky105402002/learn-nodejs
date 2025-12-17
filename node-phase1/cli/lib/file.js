const fs = require("fs/promises");
const path = require("path");

async function readFile(filePath) {
  return fs.readFile(path.resolve(filePath), "utf-8");
}

async function writeFile(filePath, content) {
  return fs.writeFile(path.resolve(filePath), content, "utf-8");
}

module.exports = {
  readFile,
  writeFile,
};
