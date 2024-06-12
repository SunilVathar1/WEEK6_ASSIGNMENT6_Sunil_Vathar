import express from 'express'
import { addRatingforBook, getratingForBook } from '../controllers/RatingControllers'
import { authenticate } from '../middlewares/authenticate'

const router=express.Router()

router.get('/:bookId/ratings',getratingForBook)
router.post('/:bookId/ratings',authenticate,addRatingforBook)


export default router