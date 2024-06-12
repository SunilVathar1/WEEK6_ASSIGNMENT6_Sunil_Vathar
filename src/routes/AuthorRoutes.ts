import express from 'express';
import { createAuthor, getAllAuthors, getAuthorById, updateAuthor } from '../controllers/AuthorControllers';
import authorizeAdmin from '../middlewares/adminauth';

const router=express.Router();

router.get('/',getAllAuthors)
router.get('/:id',getAuthorById)
router.post('/',authorizeAdmin,createAuthor)
router.put('/:id',authorizeAdmin,updateAuthor)
router.delete('/:id',authorizeAdmin,getAllAuthors)

export default router