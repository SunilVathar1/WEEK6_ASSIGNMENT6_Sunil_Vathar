import express from 'express'
import { createBook, deleteBookbyID, getAllBooks, getBookById, updateBookbyID } from '../controllers/BooksControllers'

const router=express.Router()

router.get('/',getAllBooks)
router.get('/:id',getBookById)
router.post('/',createBook)
router.put('/:id',updateBookbyID)
router.delete('/:id',deleteBookbyID)

export default router