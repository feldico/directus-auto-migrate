"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readData = void 0;
var connect_1 = __importDefault(require("../database/connect"));
var cleanup_1 = require("../utils/cleanup");
var logger_1 = __importDefault(require("../utils/logger"));
function readData() {
    return __awaiter(this, void 0, void 0, function () {
        var collections, fields, _a, permissions, _b, presets, _c, relations, _d, data;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    logger_1.default.message("loading", "Reading the current state of your Directus instance...");
                    return [4 /*yield*/, connect_1.default().select("*").from("directus_collections")];
                case 1:
                    collections = _e.sent();
                    _a = cleanup_1.removeId;
                    return [4 /*yield*/, connect_1.default().select("*").from("directus_fields")];
                case 2:
                    fields = _a.apply(void 0, [_e.sent()]);
                    _b = cleanup_1.removeId;
                    return [4 /*yield*/, connect_1.default().select("*").from("directus_permissions")];
                case 3:
                    permissions = _b.apply(void 0, [_e.sent()]);
                    _c = cleanup_1.removeId;
                    return [4 /*yield*/, connect_1.default().select("*").from("directus_presets")];
                case 4:
                    presets = _c.apply(void 0, [_e.sent()]);
                    _d = cleanup_1.removeId;
                    return [4 /*yield*/, connect_1.default().select("*").from("directus_relations")];
                case 5:
                    relations = _d.apply(void 0, [_e.sent()]);
                    data = {
                        collections: collections,
                        fields: fields,
                        permissions: permissions,
                        presets: presets,
                        relations: relations,
                    };
                    logger_1.default.plain("Done");
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.readData = readData;
//# sourceMappingURL=read-data.js.map