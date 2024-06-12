import { Request,Response } from "express";
import Author from "../models/Author";

export const getAllAuthors=async (req:Request,res:Response) => {
    try {
        const authors = await Author.findAll();
        return res.json(authors);
      } catch (error) {
        return res.status(500).json({ error: 'Unable to fetch authors' });
      }
}

export const getAuthorById=async (req:Request, res:Response) => {
    const authorId=req.body
    try {
        const author = await Author.findOne(authorId);
        return res.json(author);
      } catch (error) {
        return res.status(500).json({ error: 'Unable to fetch authors' });
      }
} 

export const createAuthor=async (req:Request, res:Response) => {
    const authorDetails=req.body
    try {
        const author= await Author.create(authorDetails);
        return res.json(author);
      } catch (error) {
        return res.status(500).json({ error: 'Unable to create author' });
      }
}

export const updateAuthor=async (req:Request, res:Response) => {
    const authId=req.params.authId
    const authorDetails=req.body
    try {
        const author= await Author.update(authorDetails,{where:{id:authId}});
        return res.json({msg:'author updated sucessfully',author:author});
      } catch (error) {
        return res.status(500).json({ error: 'Unable to update author' });
      }
}

export const deleteAuthor=async (req:Request, res:Response) => {
    const authId=req.params.authId
    try {
        const author= await Author.destroy({where:{id:authId}});
        return res.json({msg:'author deleted sucessfully', author:author});
      } catch (error) {
        return res.status(500).json({ error: 'Unable to delete author' });
      }

}