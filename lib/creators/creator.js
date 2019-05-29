"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Creator = /** @class */ (function () {
    function Creator(name, swInfo, hwInfo, serialNumber) {
        this.devices = [];
        this.name = name;
        if (swInfo) {
            this.swInfo = swInfo;
        }
        if (hwInfo) {
            this.hwInfo = hwInfo;
        }
        if (serialNumber) {
            this.serialNumber = serialNumber;
        }
    }
    Creator.prototype.toJSON = function () {
        return {
            name: this.name,
            serialNumber: this.serialNumber ? this.serialNumber : null,
            swInfo: this.swInfo ? this.swInfo : null,
            hwInfo: this.hwInfo ? this.hwInfo : null,
            devices: this.devices.reduce(function (devicesArray, device) {
                devicesArray.push(device.toJSON());
                return devicesArray;
            }, []),
        };
    };
    return Creator;
}());
exports.Creator = Creator;