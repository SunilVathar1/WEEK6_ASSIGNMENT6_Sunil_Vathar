"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const User_1 = __importDefault(require("./User"));
const Book_1 = __importDefault(require("./Book"));
class Reviews extends sequelize_1.Model {
}
Reviews.init({
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
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    }
}, { sequelize: pgConfig_1.default, modelName: 'Reviews', timestamps: false });
exports.default = Reviews;
//# sourceMappingURL=Reviews.js.map