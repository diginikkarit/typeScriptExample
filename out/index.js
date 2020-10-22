"use strict";
//This is small example of using classes
// good links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// https://reactgo.com/node-es6-imports/
// https://www.youtube.com/watch?v=teDVlOjOCT0
//
// note: this app has esm package included in package.json
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Import Classes
console.log("-- This is a ts thing..");
var Car_1 = require("./Classes/Car");
var Person_1 = __importDefault(require("./Classes/Person"));
var CarHandler_1 = __importDefault(require("./Classes/CarHandler"));
console.log("Index started");
//var pr = new PersonClass("Heikki","Mustonen",333)
var auto1 = new Car_1.Car("BMW", "br-44");
var auto2 = new Car_1.Car();
auto2.brand = "Volvo";
auto2.model = "740 GL";
var randomObject = { dude: "Heikki", profession: "24h enterteiner" };
console.log("\n car stuff with typeScript \n");
console.log("This object is of a Car Class : " + CarHandler_1.default(auto2));
console.log("This object is of a Car Class : " + CarHandler_1.default(auto1));
console.log("This object is of a Car Class : " + CarHandler_1.default(randomObject));
console.log("\n Truck stuff");
var rekka = new Car_1.Truck("scania", "xb-gg", 444);
//will not work
rekka.driver = randomObject;
//does work
rekka.driver = new Person_1.default("Heikki", "Koponen", 3354);
//console.log(rekka.hv)
//# sourceMappingURL=index.js.map