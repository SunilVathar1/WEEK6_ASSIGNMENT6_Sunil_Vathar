import express from 'express'
import  {addReviewForBook, deleteReview, getReviewForBook}  from '../controllers/ReviewsController'
import authorizeAdmin from '../middlewares/adminauth'
import { authenticate } from '../middlewares/authenticate'

const router=express.Router()

router.get('/:bookId/reviews',getReviewForBook)
router.post('/:bookId/reviews',authenticate,addReviewForBook)
router.delete('/reviews/:id',authorizeAdmin,deleteReview)

export default router