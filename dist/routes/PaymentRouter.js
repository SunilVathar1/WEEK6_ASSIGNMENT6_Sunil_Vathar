"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PaymentControllers_1 = require("../controllers/PaymentControllers");
const authenticate_1 = require("../middlewares/authenticate");
const router = express_1.default.Router();
router.post('/', authenticate_1.authenticate, PaymentControllers_1.createOrder);
router.get('/:id', authenticate_1.authenticate, PaymentControllers_1.getOrderById);
exports.default = router;
//# sourceMappingURL=PaymentRouter.js.map