function parseArgs(argv) {
  if (argv.length < 3) {
    throw new Error(
      "Usage: node text-tool.js <input> <output> --upper|--lower|--hash"
    );
  }

  const [input, output, mode] = argv;

  const validModes = ["--upper", "--lower", "--hash"];
  if (!validModes.includes(mode)) {
    throw new Error(`Invalid mode: ${mode}`);
  }

  return { input, output, mode };
}

module.exports = {
  parseArgs,
};
