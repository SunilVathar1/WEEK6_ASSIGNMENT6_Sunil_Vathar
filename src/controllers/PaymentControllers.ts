import { Request, Response } from 'express';
import Order from '../models/Order';
// import { createMandate, createPayment } from '../goCardless/customer';
const gocardless = require('gocardless-nodejs');

export const createOrder = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { userId, bookId, amount } = req.body;

    // const mandateId = await createMandate(userId);
    // const paymentId = await createPayment(userId, bookId, amount, mandateId);    
    const order = await Order.create({ userId, bookId, amount});

    return res.status(201).json({msg:'order created sucessfully',order:order});
  } catch (error) {
    console.error('Error creating order:', error);
    return res.status(500).json({ error: 'Unable to create order' });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const order = await Order.findByPk(id);
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching order' });
    }
  };

