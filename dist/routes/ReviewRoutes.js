"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ReviewsController_1 = require("../controllers/ReviewsController");
const adminauth_1 = __importDefault(require("../middlewares/adminauth"));
const authenticate_1 = require("../middlewares/authenticate");
const router = express_1.default.Router();
router.get('/:bookId/reviews', ReviewsController_1.getReviewForBook);
router.post('/:bookId/reviews', authenticate_1.authenticate, ReviewsController_1.addReviewForBook);
router.delete('/reviews/:id', adminauth_1.default, ReviewsController_1.deleteReview);
exports.default = router;
//# sourceMappingURL=ReviewRoutes.js.map