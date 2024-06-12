"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const creadtionals_1 = __importDefault(require("../commons/creadtionals"));
const authenticate = (req, res, next) => {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'Authentication token is missing' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, creadtionals_1.default.secreat_key);
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(401).json({ error: 'Invalid authentication token' });
    }
};
exports.authenticate = authenticate;
//# sourceMappingURL=authenticate.js.map