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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = exports.loginUser = exports.registerUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const tokenService_1 = require("../middlewares/tokenService");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = req.body;
    const password = userInfo.password;
    try {
        let hasshedpassword = yield bcrypt_1.default.hash(password, 10);
        userInfo.password = hasshedpassword;
        let user = yield User_1.default.create(userInfo);
        let token = (0, tokenService_1.tokenGenerator)({ user });
        res.json({ msg: "User created Sucessfully", user: user, token: token });
    }
    catch (error) {
        // res.json({ err: error });
        throw error;
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        let user = yield User_1.default.findOne({
            where: { email: email },
        });
        if (user) {
            let token = (0, tokenService_1.tokenGenerator)({ user });
            (yield bcrypt_1.default.compare(password, user.password))
                ? res.json({ msg: "Login Sucessfully", user: user, token: token })
                : res.json({ msg: "Invalid Credentials" });
        }
    }
    catch (error) {
        throw error;
    }
});
exports.loginUser = loginUser;
const getCurrentUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    try {
        const currentUser = yield User_1.default.findOne(user);
        if (!currentUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(currentUser);
    }
    catch (error) {
        res.status(500).json({ error: 'Unable to fetch user details' });
    }
});
exports.getCurrentUser = getCurrentUser;
//# sourceMappingURL=UserControllers.js.map