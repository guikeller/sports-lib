"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var data_number_1 = require("./data.number");
var DataSpeed = /** @class */ (function (_super) {
    __extends(DataSpeed, _super);
    function DataSpeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataSpeed.prototype.getDisplayValue = function () {
        return this.getValue().toFixed(2);
    };
    DataSpeed.className = 'DataSpeed';
    DataSpeed.type = 'Speed';
    DataSpeed.unit = 'm/s';
    return DataSpeed;
}(data_number_1.DataNumber));
exports.DataSpeed = DataSpeed;