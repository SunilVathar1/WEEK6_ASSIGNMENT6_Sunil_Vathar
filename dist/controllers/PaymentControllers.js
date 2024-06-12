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
exports.getOrderById = exports.createOrder = void 0;
const Order_1 = __importDefault(require("../models/Order"));
// import { createMandate, createPayment } from '../goCardless/customer';
const gocardless = require('gocardless-nodejs');
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, bookId, amount } = req.body;
        // const mandateId = await createMandate(userId);
        // const paymentId = await createPayment(userId, bookId, amount, mandateId);    
        const order = yield Order_1.default.create({ userId, bookId, amount });
        return res.status(201).json({ msg: 'order created sucessfully', order: order });
    }
    catch (error) {
        console.error('Error creating order:', error);
        return res.status(500).json({ error: 'Unable to create order' });
    }
});
exports.createOrder = createOrder;
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const order = yield Order_1.default.findByPk(id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(order);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching order' });
    }
});
exports.getOrderById = getOrderById;
//# sourceMappingURL=PaymentControllers.js.map