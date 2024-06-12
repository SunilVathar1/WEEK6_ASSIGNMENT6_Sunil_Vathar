import { DataTypes, Model} from "sequelize";
import sequelize from "../postgres/pgConfig";
import Book from "./Book";
import User from "./User";

interface PaymentAtribute {
  id?:number;
  userId:number;
  bookId:number;
  amount:number;
  status:string;
  createdAt:Date;
}

class Payment extends Model<PaymentAtribute>implements PaymentAtribute{
    id?: number;
    userId!: number;
    bookId!: number;
    amount!: number;
    status!: string;
    createdAt!: Date;
}

Payment.init({
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
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue:Date.now()
    }
  },{sequelize,modelName:'Payment',timestamps:false})

  export default Payment