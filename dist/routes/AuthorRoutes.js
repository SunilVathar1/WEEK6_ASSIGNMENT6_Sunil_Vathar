"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthorControllers_1 = require("../controllers/AuthorControllers");
const adminauth_1 = __importDefault(require("../middlewares/adminauth"));
const router = express_1.default.Router();
router.get('/', AuthorControllers_1.getAllAuthors);
router.get('/:id', AuthorControllers_1.getAuthorById);
router.post('/', adminauth_1.default, AuthorControllers_1.createAuthor);
router.put('/:id', adminauth_1.default, AuthorControllers_1.updateAuthor);
router.delete('/:id', adminauth_1.default, AuthorControllers_1.getAllAuthors);
exports.default = router;
//# sourceMappingURL=AuthorRoutes.js.map