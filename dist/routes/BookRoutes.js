"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BooksControllers_1 = require("../controllers/BooksControllers");
const router = express_1.default.Router();
router.get('/', BooksControllers_1.getAllBooks);
router.get('/:id', BooksControllers_1.getBookById);
router.post('/', BooksControllers_1.createBook);
router.put('/:id', BooksControllers_1.updateBookbyID);
router.delete('/:id', BooksControllers_1.deleteBookbyID);
exports.default = router;
//# sourceMappingURL=BookRoutes.js.map