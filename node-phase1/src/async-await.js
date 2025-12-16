function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function main() {
  console.log("1");

  await delay(0);
  console.log("2");

  await Promise.resolve();
  console.log("3");

  console.log("4");
}

main();
