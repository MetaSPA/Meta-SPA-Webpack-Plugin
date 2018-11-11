"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MetaSPAPlugin = /** @class */ (function () {
    function MetaSPAPlugin(options) {
        this.options = {
            namespace: "default",
            provide: []
        };
        this.options = options;
    }
    MetaSPAPlugin.prototype.apply = function (compiler) {
        compiler.options.target = "web";
        if (!compiler.options.output) {
            compiler.options.output = {};
        }
        if (!compiler.options.externals) {
            compiler.options.externals = {};
        }
        compiler.options.output.libraryTarget = "jsonp";
        compiler.options.output.library = "metaSPALoad({namespace: '" + this.options.namespace + "'})";
        compiler.options.output.jsonpFunction = "metaSPAJsonp" + this.options.namespace;
        if (!compiler.options.externals)
            compiler.options.externals = {};
        this.options.provide.forEach(function (_a) {
            var module = _a.module, symbol = _a.symbol;
            compiler.options.externals[module] = "metaSPAProvider." + symbol;
        });
    };
    return MetaSPAPlugin;
}());
exports.default = MetaSPAPlugin;
