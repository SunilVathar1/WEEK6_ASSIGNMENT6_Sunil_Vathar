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
exports.deleteBookbyID = exports.updateBookbyID = exports.createBook = exports.getBookById = exports.getAllBooks = void 0;
const Book_1 = __importDefault(require("../models/Book"));
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let books = yield Book_1.default.findAll();
        if (books) {
            res.json({ msg: 'Books are Here..', Books: books });
        }
    }
    catch (error) {
        console.log("Something went Wrong...while fetching Books");
        throw error;
    }
});
exports.getAllBooks = getAllBooks;
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let book = yield Book_1.default.findByPk(req.params.id);
        if (!book) {
            res.json({ msg: 'Book is not Here..', Book: book });
        }
        else {
            res.json({ msg: 'Book is  Here..', Book: book });
        }
    }
    catch (error) {
        console.log("Something went Wrong...while fetching Book");
        throw error;
    }
});
exports.getBookById = getBookById;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let bookDeatils = req.body;
    try {
        let book = yield Book_1.default.create(bookDeatils);
        if (book) {
            res.json({ msg: 'Book is Created..', Book: book });
        }
    }
    catch (error) {
        console.log("Something went Wrong...while creating Book");
        throw error;
    }
});
exports.createBook = createBook;
const updateBookbyID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let bookDeatils = req.body;
    let id = req.params.id;
    try {
        let book = yield Book_1.default.update(bookDeatils, { where: { id: id } });
        if (book) {
            res.json({ msg: 'Book is Updated..', Book: bookDeatils });
        }
    }
    catch (error) {
        console.log("Something went Wrong...while updating Book");
        throw error;
    }
});
exports.updateBookbyID = updateBookbyID;
const deleteBookbyID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    try {
        let book = yield Book_1.default.destroy({ where: { id: id } });
        if (book) {
            res.json({ msg: 'Book is Deleted..', Book: id });
        }
    }
    catch (error) {
        console.log("Something went Wrong...while deleting Book");
        throw error;
    }
});
exports.deleteBookbyID = deleteBookbyID;
//# sourceMappingURL=BooksControllers.js.map