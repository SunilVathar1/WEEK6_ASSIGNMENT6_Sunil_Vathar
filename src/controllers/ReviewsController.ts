import { Request,Response } from "express";
import Reviews from "../models/Reviews";
import Book from "../models/Book";

export const getReviewForBook=async (req:Request,res:Response) => {
    const bookId=req.params.bookId;
    try {
        const reviews=await Reviews.findOne({
            where:{bookId}
        });
        if (reviews) {
            res.status(200).json(reviews);   
        }
    } catch (error) {
        throw error;
    }
}

export const addReviewForBook=async (req:Request, res:Response) => {
    const bookId=req.params.bookId;
    const reviewDetails=req.body;
    try {
       const book=await Book.findOne({
            where:{id:bookId}
        })
        if (book) {
            const review=await Reviews.create({...reviewDetails,bookId});
            res.status(200).json(review);
        }
    } catch (error) {
        throw error;
    }
} 

export const deleteReview=async (req:Request, res:Response) => {
    const reviewId=req.params.reviewId;
    try {
        await Reviews.destroy({
            where:{id:reviewId}
        })
        res.status(200).json("Review deleted successfully");
    } catch (error) {
        throw error;
    }   
}