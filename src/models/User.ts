import sequelize from "../postgres/pgConfig";
import { DataTypes, Model } from "sequelize";

interface userAtributes {
  id?:number;
  username:string;
  password:string;
  email:string;
  role:'user'|'admin'
}

class User extends Model<userAtributes> implements userAtributes{
    id?: number;
    username!: string;
    password!: string;
    email!: string; 
    role!:'user'|'admin'
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  role:{
    type:DataTypes.ENUM('user','admin'),
    allowNull:false,
    defaultValue:'user',
  }
},{sequelize,modelName:'User',timestamps:false}
);

export default User

