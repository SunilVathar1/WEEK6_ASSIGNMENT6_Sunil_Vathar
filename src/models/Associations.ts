import Author from "./Author";
import Book from "./Book";
import Payment from "./Payment";
import Rating from "./Rating";
import Reviews from "./Reviews";
import User from "./User";
//  maintaining the seperate file for associations
Book.belongsToMany(Author, { through: 'BookAuthors' });
Author.belongsToMany(Book, { through: 'BookAuthors' });

User.hasMany(Reviews, { foreignKey: 'userId' });
Reviews.belongsTo(User, { foreignKey: 'userId' });

Book.hasMany(Reviews, { foreignKey: 'bookId' });
Reviews.belongsTo(Book, { foreignKey: 'bookId' });

User.hasMany(Rating, { foreignKey: 'userId' });
Rating.belongsTo(User, { foreignKey: 'userId' });

Book.hasMany(Rating, { foreignKey: 'bookId' });
Rating.belongsTo(Book, { foreignKey: 'bookId' });

User.hasMany(Payment, { foreignKey: 'userId' });
Payment.belongsTo(User, { foreignKey: 'userId' });

Book.hasMany(Payment, { foreignKey: 'bookId' });
Payment.belongsTo(Book, { foreignKey: 'bookId' });