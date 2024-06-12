"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const Book_1 = __importDefault(require("./Book"));
const User_1 = __importDefault(require("./User"));
class Payment extends sequelize_1.Model {
}
Payment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User_1.default,
            key: 'id'
        }
    },
    bookId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Book_1.default,
            key: 'id'
        }
    },
    amount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: Date.now()
    }
}, { sequelize: pgConfig_1.default, modelName: 'Payment', timestamps: false });
exports.default = Payment;
//# sourceMappingURL=Payment.js.map