"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const PaymentRouter_1 = __importDefault(require("./routes/PaymentRouter"));
const RatingRoutes_1 = __importDefault(require("./routes/RatingRoutes"));
const BookRoutes_1 = __importDefault(require("./routes/BookRoutes"));
const AuthorRoutes_1 = __importDefault(require("./routes/AuthorRoutes"));
const ReviewRoutes_1 = __importDefault(require("./routes/ReviewRoutes"));
const app = (0, express_1.default)();
const port = 3000;
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// routes
app.use('/Book/books', BookRoutes_1.default);
app.use('/Book-Store/User', UserRoutes_1.default);
app.use('/Book-Store/Books', RatingRoutes_1.default);
app.use('/Book-Store/Authors', AuthorRoutes_1.default);
app.use('/Book-Store/books', ReviewRoutes_1.default);
app.use('/Book-Store/order', PaymentRouter_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=app.js.map