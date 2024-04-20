const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`);
});

customEmitter.on("response", (name, id) => {
  console.log(`some other logic here ${name}`);
});

customEmitter.emit("response", "john", 34);
