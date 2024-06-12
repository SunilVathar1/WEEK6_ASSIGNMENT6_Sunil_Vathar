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
exports.deleteAuthor = exports.updateAuthor = exports.createAuthor = exports.getAuthorById = exports.getAllAuthors = void 0;
const Author_1 = __importDefault(require("../models/Author"));
const getAllAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield Author_1.default.findAll();
        return res.json(authors);
    }
    catch (error) {
        return res.status(500).json({ error: 'Unable to fetch authors' });
    }
});
exports.getAllAuthors = getAllAuthors;
const getAuthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authorId = req.body;
    try {
        const author = yield Author_1.default.findOne(authorId);
        return res.json(author);
    }
    catch (error) {
        return res.status(500).json({ error: 'Unable to fetch authors' });
    }
});
exports.getAuthorById = getAuthorById;
const createAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authorDetails = req.body;
    try {
        const author = yield Author_1.default.create(authorDetails);
        return res.json(author);
    }
    catch (error) {
        return res.status(500).json({ error: 'Unable to create author' });
    }
});
exports.createAuthor = createAuthor;
const updateAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authId = req.params.authId;
    const authorDetails = req.body;
    try {
        const author = yield Author_1.default.update(authorDetails, { where: { id: authId } });
        return res.json({ msg: 'author updated sucessfully', author: author });
    }
    catch (error) {
        return res.status(500).json({ error: 'Unable to update author' });
    }
});
exports.updateAuthor = updateAuthor;
const deleteAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authId = req.params.authId;
    try {
        const author = yield Author_1.default.destroy({ where: { id: authId } });
        return res.json({ msg: 'author deleted sucessfully', author: author });
    }
    catch (error) {
        return res.status(500).json({ error: 'Unable to delete author' });
    }
});
exports.deleteAuthor = deleteAuthor;
//# sourceMappingURL=AuthorControllers.js.map