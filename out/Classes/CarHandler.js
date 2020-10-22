"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Car");
function CarChecker(obj) {
    //check that object is a intance of Car class
    if (obj instanceof Car_1.Car) {
        //console.log("Car class verified..")
        return true;
    }
    else {
        //console.log("Was not type of Car..")
        return false;
    }
}
exports.default = CarChecker;
//# sourceMappingURL=CarHandler.js.map