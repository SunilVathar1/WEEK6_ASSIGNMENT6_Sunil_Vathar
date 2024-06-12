"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserControllers_1 = require("../controllers/UserControllers");
const authenticate_1 = require("../middlewares/authenticate");
const router = express_1.default.Router();
router.post('/register', UserControllers_1.registerUser);
router.post('/login', authenticate_1.authenticate, UserControllers_1.loginUser);
router.get('/users/me', authenticate_1.authenticate, UserControllers_1.getCurrentUser);
exports.default = router;
//# sourceMappingURL=UserRoutes.js.map