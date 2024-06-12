import { Request, Response } from "express";
import Book from "../models/Book";

export const getAllBooks=async (req:Request,res:Response) => {
    try {
        let books=await Book.findAll()
        if (books) {
            res.json({msg:'Books are Here..',Books:books})
        }
    } catch (error) {
        console.log("Something went Wrong...while fetching Books");
        throw error
    }
}

export const getBookById=async (req:Request,res:Response) => {
    try {
        let book=await Book.findByPk(req.params.id)
        if (!book) {
            res.json({msg:'Book is not Here..', Book:book})
        }else{
            res.json({msg:'Book is  Here..', Book:book})
        }
    } catch (error) {
        console.log("Something went Wrong...while fetching Book");
        throw error
    }
}


export const createBook=async (req:Request, res:Response) => {
    let bookDeatils=req.body
    try {
        let book=await Book.create(bookDeatils)
        if (book) {
            res.json({msg:'Book is Created..', Book:book})
        }
    } catch (error) {
        console.log("Something went Wrong...while creating Book");
        throw error
    }

}

export const updateBookbyID=async (req:Request, res:Response) => {
    let bookDeatils=req.body
    let id=req.params.id
    try {
        let book=await Book.update(bookDeatils,{where:{id:id}})
        if (book) {
            res.json({msg:'Book is Updated..', Book:bookDeatils})
        }
    } catch (error) {
        console.log("Something went Wrong...while updating Book");
        throw error
    }
}

export const deleteBookbyID=async (req:Request, res:Response) => {
    let id=req.params.id
    try {
        let book=await Book.destroy({where:{id:id}})
        if (book) {
            res.json({msg:'Book is Deleted..', Book:id})
        }
    } catch (error) {
        console.log("Something went Wrong...while deleting Book");
        throw error
    }
}