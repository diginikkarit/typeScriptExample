"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = exports.Car = void 0;
var Person_1 = __importDefault(require("./Person"));
var Car = /** @class */ (function () {
    function Car(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    Object.defineProperty(Car.prototype, "driver", {
        get: function () {
            return this._driver;
        },
        set: function (driver) {
            if (driver instanceof Person_1.default) {
                var msg = "Person set as a driver";
                msg += "\nname:" + driver.firstName + " " + driver.lastName;
                msg += "\nsalary:" + driver.salary;
                console.log(msg);
                this._driver = driver;
            }
            else {
                console.log("Error setting driver");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
exports.Car = Car;
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(brand, model, hv) {
        var _this = _super.call(this, brand, model) || this;
        _this.hv = hv;
        return _this;
    }
    return Truck;
}(Car));
exports.Truck = Truck;
//# sourceMappingURL=Car.js.map