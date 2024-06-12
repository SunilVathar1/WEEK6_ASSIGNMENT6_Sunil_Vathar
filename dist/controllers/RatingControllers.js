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
exports.addRatingforBook = exports.getratingForBook = void 0;
const console_1 = require("console");
const Rating_1 = __importDefault(require("../models/Rating"));
const getratingForBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    try {
        let bookrating = yield Rating_1.default.findAll({
            where: {
                bookId: bookId,
            },
        });
        if (bookrating) {
            res.status(200).json({ Rating: bookrating });
        }
        else {
            res.status(404).json({ message: "No Rating Found" });
        }
    }
    catch (err) {
        throw console_1.error;
    }
});
exports.getratingForBook = getratingForBook;
const addRatingforBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = Number(req.params.bookId);
    const { rating, userId, ratingId } = req.body;
    if (!bookId) {
        res.json({ msg: 'please provide valid Book Id' });
    }
    else {
        try {
            let bookrating = yield Rating_1.default.create({
                id: ratingId,
                bookId: bookId,
                rating: rating,
                userId: userId,
            });
            res.status(200).json({ Rating: bookrating });
        }
        catch (err) {
            throw console_1.error;
        }
    }
});
exports.addRatingforBook = addRatingforBook;
//# sourceMappingURL=RatingControllers.js.map