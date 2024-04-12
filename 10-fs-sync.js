const { readFileSync, writeFileSync } = require("fs");
console.log("start")
const first = readFileSync("./subfolder/first.txt", "utf8");
const second = readFileSync("./subfolder/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./subfolder/result-sync.txt",
  `Here is the result ${first}, ${second} /n`,
  { flag: "a" }
);
console.log("done with this task");
console.log('start the next one');
