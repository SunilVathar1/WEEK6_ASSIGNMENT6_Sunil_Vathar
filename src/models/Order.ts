import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgres/pgConfig'; // Assuming you have a database configuration file

interface OrderAttributes {
  id?: number;
  userId: number;
  bookId: number;
  amount: number;
  // paymentId: string;
}

class Order extends Model<OrderAttributes> implements OrderAttributes {
  public id?: number;
  public userId!: number;
  public bookId!: number;
  public amount!: number;
  // public paymentId!: string;

  // Add any additional methods or class level functions here

}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    // paymentId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  },
  {
    sequelize,
    modelName: 'Order', 
  }
);

export default Order;
