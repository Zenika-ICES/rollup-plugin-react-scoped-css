"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicJsxParser = void 0;
var ClassicJsxParser = /** @class */ (function () {
    function ClassicJsxParser() {
    }
    ClassicJsxParser.prototype.isNodeReactFragment = function (node) {
        var _a, _b, _c, _d, _e, _f;
        return ((_c = (_b = (_a = node === null || node === void 0 ? void 0 : node.arguments) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.object) === null || _c === void 0 ? void 0 : _c.name) === "React" &&
            ((_f = (_e = (_d = node === null || node === void 0 ? void 0 : node.arguments) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.property) === null || _f === void 0 ? void 0 : _f.name) === "Fragment";
    };
    ClassicJsxParser.prototype.isNodeReactElement = function (node) {
        var _a, _b, _c, _d;
        return (node === null || node === void 0 ? void 0 : node.type) === 'CallExpression' &&
            ((_b = (_a = node === null || node === void 0 ? void 0 : node.callee) === null || _a === void 0 ? void 0 : _a.object) === null || _b === void 0 ? void 0 : _b.name) === 'React' &&
            ((_d = (_c = node === null || node === void 0 ? void 0 : node.callee) === null || _c === void 0 ? void 0 : _c.property) === null || _d === void 0 ? void 0 : _d.name) === 'createElement';
    };
    ClassicJsxParser.prototype.extendNodeWithAttributes = function (node, attr) {
        var _this = this;
        var _a;
        var arg = (_a = node === null || node === void 0 ? void 0 : node.arguments) === null || _a === void 0 ? void 0 : _a[1];
        return __assign(__assign({}, node), { arguments: node === null || node === void 0 ? void 0 : node.arguments.map(function (v, i) {
                if (i === 1) {
                    if (v.type === 'ObjectExpression') {
                        return __assign(__assign({}, v), { properties: __spreadArray(__spreadArray([], __read(arg.properties), false), [
                                _this.createAttributeNode(attr)
                            ], false) });
                    }
                    else {
                        return {
                            type: 'ObjectExpression',
                            properties: [_this.createAttributeNode(attr)]
                        };
                    }
                }
                return v;
            }) });
    };
    ClassicJsxParser.prototype.createAttributeNode = function (attr) {
        return {
            type: 'Property',
            method: false,
            shorthand: false,
            computed: false,
            key: {
                type: 'Identifier',
                name: "\"".concat(attr, "\"")
            },
            value: {
                type: 'Literal',
                value: true,
                raw: "true"
            },
            kind: 'init'
        };
    };
    return ClassicJsxParser;
}());
exports.ClassicJsxParser = ClassicJsxParser;
