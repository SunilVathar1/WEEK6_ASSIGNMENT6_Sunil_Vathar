"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RatingControllers_1 = require("../controllers/RatingControllers");
const authenticate_1 = require("../middlewares/authenticate");
const router = express_1.default.Router();
router.get('/:bookId/ratings', RatingControllers_1.getratingForBook);
router.post('/:bookId/ratings', authenticate_1.authenticate, RatingControllers_1.addRatingforBook);
exports.default = router;
//# sourceMappingURL=RatingRoutes.js.map