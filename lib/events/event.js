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
var stats_class_abstract_1 = require("../stats/stats.class.abstract");
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event(name) {
        var _this = _super.call(this) || this;
        _this.activities = [];
        _this.name = name;
        return _this;
    }
    Event.prototype.addActivity = function (activity) {
        this.activities.push(activity);
    };
    Event.prototype.removeActivity = function (activityToRemove) {
        this.getActivities().splice(this.getActivities().findIndex(function (activity) {
            return activityToRemove.getID() === activity.getID();
        }), 1);
    };
    Event.prototype.getActivities = function () {
        return this.activities;
    };
    Event.prototype.getFirstActivity = function () {
        return this.getActivities().reduce(function (activityA, activityB) {
            return activityA.startDate < activityB.startDate ? activityA : activityB;
        });
    };
    Event.prototype.getLastActivity = function () {
        return this.getActivities().reduce(function (activityA, activityB) {
            return activityA.startDate < activityB.startDate ? activityB : activityA;
        });
    };
    Event.prototype.getPoints = function (startDate, endDate, activities) {
        return (activities || this.getActivities()).reduce(function (pointsArray, activity) {
            return pointsArray.concat(activity.getPoints(startDate, endDate));
        }, []);
    };
    // @todo maybe merge with below
    Event.prototype.getPointsWithPosition = function (startDate, endDate, activities) {
        return this.getPoints(startDate, endDate, activities)
            .reduce(function (pointsWithPosition, point) {
            if (point.getPosition()) {
                pointsWithPosition.push(point);
            }
            return pointsWithPosition;
        }, []);
    };
    Event.prototype.getPointsWithDataType = function (dataType, startDate, endDate, activities) {
        return this.getPoints(startDate, endDate, activities)
            .reduce(function (pointsWithDataType, point) {
            if (point.getDataByType(dataType)) {
                pointsWithDataType.push(point);
            }
            return pointsWithDataType;
        }, []);
    };
    Event.prototype.toJSON = function () {
        var stats = [];
        this.stats.forEach(function (value, key) {
            stats.push(value.toJSON());
        });
        return {
            id: this.getID(),
            name: this.name,
            stats: stats,
            activities: this.getActivities().reduce(function (jsonActivitiesArray, activity) {
                jsonActivitiesArray.push(activity.toJSON());
                return jsonActivitiesArray;
            }, []),
        };
    };
    return Event;
}(stats_class_abstract_1.StatsClassAbstract));
exports.Event = Event;