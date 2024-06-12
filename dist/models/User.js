"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    role: {
        type: sequelize_1.DataTypes.ENUM('user', 'admin'),
        allowNull: false,
        defaultValue: 'user',
    }
}, { sequelize: pgConfig_1.default, modelName: 'User', timestamps: false });
exports.default = User;
//# sourceMappingURL=User.js.map