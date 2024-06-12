import { DataTypes, Model } from "sequelize";
import sequelize from "../postgres/pgConfig";
import User from "./User";
import Book from "./Book";

interface RatingAtributes {
  id:number;
  userId:number;
  bookId:number;
  rating:number;
}

class Rating extends Model<RatingAtributes>implements RatingAtributes{
    id!: number;
    userId!: number;
    bookId!: number;
    rating!: number;
    
}

Rating.init({
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
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    }
  },{sequelize,modelName:'Rating',timestamps:false})

  export default Rating