"use strict";
exports.__esModule = true;
var vitest_1 = require("vitest");
var Logger_js_1 = require("../src/pr7/Logger.js");
(0, vitest_1.describe)("Logger", function () {
    (0, vitest_1.it)("should add a new login", function () {
        var logger = Logger_js_1.Logger.getLogger();
        var activity = {
            user: "user1",
            action: "login",
            date: "2021-10-10",
            hour: "10:00"
        };
        logger.addLogin(activity);
        (0, vitest_1.expect)(logger.getActions()).toEqual([activity]);
    });
});
