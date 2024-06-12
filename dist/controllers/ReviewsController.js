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
exports.deleteReview = exports.addReviewForBook = exports.getReviewForBook = void 0;
const Reviews_1 = __importDefault(require("../models/Reviews"));
const Book_1 = __importDefault(require("../models/Book"));
const getReviewForBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    try {
        const reviews = yield Reviews_1.default.findOne({
            where: { bookId }
        });
        if (reviews) {
            res.status(200).json(reviews);
        }
    }
    catch (error) {
        throw error;
    }
});
exports.getReviewForBook = getReviewForBook;
const addReviewForBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const reviewDetails = req.body;
    try {
        const book = yield Book_1.default.findOne({
            where: { id: bookId }
        });
        if (book) {
            const review = yield Reviews_1.default.create(Object.assign(Object.assign({}, reviewDetails), { bookId }));
            res.status(200).json(review);
        }
    }
    catch (error) {
        throw error;
    }
});
exports.addReviewForBook = addReviewForBook;
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reviewId = req.params.reviewId;
    try {
        yield Reviews_1.default.destroy({
            where: { id: reviewId }
        });
        res.status(200).json("Review deleted successfully");
    }
    catch (error) {
        throw error;
    }
});
exports.deleteReview = deleteReview;
//# sourceMappingURL=ReviewsController.js.map