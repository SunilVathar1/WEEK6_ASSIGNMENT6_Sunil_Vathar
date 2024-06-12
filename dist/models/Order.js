"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig")); // Assuming you have a database configuration file
class Order extends sequelize_1.Model {
}
Order.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    bookId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    amount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    // paymentId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Order',
});
exports.default = Order;
//# sourceMappingURL=Order.js.map