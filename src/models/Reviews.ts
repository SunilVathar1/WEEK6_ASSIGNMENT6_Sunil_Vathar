import { DataTypes,Model } from "sequelize";
import sequelize from "../postgres/pgConfig";
import User from "./User";
import Book from "./Book";

interface ReviewsAtributes {
  id:string;
  userId:number;
  bookId:number;
  content:string;
}

class Reviews extends Model<ReviewsAtributes>implements ReviewsAtributes{
    id!: string;
    userId!: number;
    bookId!: number;
    content!: string;
}

Reviews.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Book,
        key: 'id'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
},{sequelize,modelName:'Reviews',timestamps:false})

export default Reviews