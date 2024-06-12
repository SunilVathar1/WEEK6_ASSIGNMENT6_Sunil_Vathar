import { error } from "console";
import { Request, Response } from "express";
import Rating from "../models/Rating";

export const getratingForBook = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  try {
    let bookrating = await Rating.findAll({
      where: {
        bookId: bookId,
      },
    });
    if (bookrating) {
      res.status(200).json({ Rating: bookrating });
    } else {
      res.status(404).json({ message: "No Rating Found" });
    }
  } catch (err) {
    throw error;
  }
};

export const addRatingforBook = async (req: Request, res: Response) => {
  const bookId =Number(req.params.bookId);
  const { rating, userId,ratingId } = req.body;
  if (!bookId) {
    res.json({msg:'please provide valid Book Id'})
  } else {
    try {
      let bookrating = await Rating.create({
        id:ratingId,
        bookId: bookId,
        rating: rating,
        userId: userId,
      });
      res.status(200).json({ Rating: bookrating });
  } catch (err) {
    throw error;
  }
}
}

