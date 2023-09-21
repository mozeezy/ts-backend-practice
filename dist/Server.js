"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var http_1 = require("http");
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.startServer = function () {
        (0, http_1.createServer)(function (req, res) {
            console.log("Request header: ".concat(req.headers));
            res.write("Hello from TS server!");
            res.end();
        }).listen(8080);
        console.log("Started server");
    };
    return Server;
}());
exports.Server = Server;
