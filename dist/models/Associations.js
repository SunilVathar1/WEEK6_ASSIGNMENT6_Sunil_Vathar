"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Author_1 = __importDefault(require("./Author"));
const Book_1 = __importDefault(require("./Book"));
const Payment_1 = __importDefault(require("./Payment"));
const Rating_1 = __importDefault(require("./Rating"));
const Reviews_1 = __importDefault(require("./Reviews"));
const User_1 = __importDefault(require("./User"));
//  maintaining the seperate file for associations
Book_1.default.belongsToMany(Author_1.default, { through: 'BookAuthors' });
Author_1.default.belongsToMany(Book_1.default, { through: 'BookAuthors' });
User_1.default.hasMany(Reviews_1.default, { foreignKey: 'userId' });
Reviews_1.default.belongsTo(User_1.default, { foreignKey: 'userId' });
Book_1.default.hasMany(Reviews_1.default, { foreignKey: 'bookId' });
Reviews_1.default.belongsTo(Book_1.default, { foreignKey: 'bookId' });
User_1.default.hasMany(Rating_1.default, { foreignKey: 'userId' });
Rating_1.default.belongsTo(User_1.default, { foreignKey: 'userId' });
Book_1.default.hasMany(Rating_1.default, { foreignKey: 'bookId' });
Rating_1.default.belongsTo(Book_1.default, { foreignKey: 'bookId' });
User_1.default.hasMany(Payment_1.default, { foreignKey: 'userId' });
Payment_1.default.belongsTo(User_1.default, { foreignKey: 'userId' });
Book_1.default.hasMany(Payment_1.default, { foreignKey: 'bookId' });
Payment_1.default.belongsTo(Book_1.default, { foreignKey: 'bookId' });
//# sourceMappingURL=Associations.js.map