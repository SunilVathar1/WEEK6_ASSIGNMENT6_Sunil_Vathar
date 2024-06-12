import { DataTypes, Model } from "sequelize";
import sequelize from "../postgres/pgConfig";

interface BookAtributes {
  id?:number;
  bookCode:string;
  title:string;
  description:string;
  publishedYear:number;
  price:number;
  authors:string;
  externalId:string;
}

class Book extends Model<BookAtributes>implements BookAtributes{
    id?: number;
    bookCode!: string;
    title!: string;
    description!: string;
    publishedYear!: number;
    price!: number;
    authors!: string;
    externalId!: string;
    
}


Book.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    bookCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    publishedYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    externalId: {
        type: DataTypes.STRING,
        allowNull: true
    },
    authors:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{sequelize,modelName:'Book'})


export default Book