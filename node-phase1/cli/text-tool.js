const { parseArgs } = require("./lib/parser");
const { readFile, writeFile } = require("./lib/file");
const { processContent } = require("./lib/processor");

async function main() {
  try {
    const { input, output, mode } = parseArgs(process.argv.slice(2));

    const content = await readFile(input);
    const result = processContent(content, mode);
    await writeFile(output, result);

    console.log("Success!");
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}

main();
