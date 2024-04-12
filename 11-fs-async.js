const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./subfolder/first.txt", "utf8", function (err, result) {
  if (err) {
    console.log(err);
    return;
  } else {
    const first = result;
    readFile("./subfolder/second.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      const second = result;
      writeFile(
        "./subfolder/result-async.txt",
        `Here is the result ${first}, ${second}`,
        (err, result) => {
          if (err) {
            console.log(err);
            console.log(err);
          } else {
            console.log("done with this task");
          }
        }
      );
    });
  }
});
console.log("Starting next task");
