import express from 'express'
import { createOrder, getOrderById } from '../controllers/PaymentControllers'
import { authenticate } from '../middlewares/authenticate'

const router=express.Router()

router.post('/',authenticate,createOrder)
router.get('/:id',authenticate,getOrderById)

export default router