const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const { person, items } = require("./6-alternative");
require("./7-mind-grenade");

sayHi("susan");
sayHi(john);
sayHi(peter);
sayHi(person.name);
sayHi(items[1]);
