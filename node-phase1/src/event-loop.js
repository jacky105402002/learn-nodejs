console.log("A");

setTimeout(() => {
  console.log("B - setTimeout");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("C1 - Promise");
  })
  .then(() => {
    console.log("C2 - Promise");
  });

console.log("D");