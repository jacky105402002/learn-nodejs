const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

async function main() {
  try {
    const args = process.argv.slice(2);

    if (args.length < 3) {
      console.error("Usage:");
      console.error(
        "node text-tool.js <input> <output> --upper|--lower|--hash"
      );
      process.exit(1);
    }

    const [inputFile, outputFile, mode] = args;

    const inputPath = path.resolve(inputFile);
    const outputPath = path.resolve(outputFile);

    const content = await fs.readFile(inputPath, "utf-8");

    let result;

    switch (mode) {
      case "--upper":
        result = content.toUpperCase();
        break;
      case "--lower":
        result = content.toLowerCase();
        break;
      case "--hash":
        result = crypto.createHash("sha256").update(content).digest("hex");
        break;
      default:
        throw new Error("Invalid mode");
    }

    await fs.writeFile(outputPath, result, "utf-8");
    console.log("Success! Output written to:", outputPath);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();
