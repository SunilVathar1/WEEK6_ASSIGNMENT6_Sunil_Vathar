"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenValidator = exports.tokenGenerator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const creadtionals_1 = __importDefault(require("../commons/creadtionals"));
const tokenGenerator = (userData) => {
    return jsonwebtoken_1.default.sign(userData, creadtionals_1.default.secreat_key);
};
exports.tokenGenerator = tokenGenerator;
function tokenValidator(token, secret) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        return decoded;
    }
    catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
}
exports.tokenValidator = tokenValidator;
//# sourceMappingURL=tokenService.js.map