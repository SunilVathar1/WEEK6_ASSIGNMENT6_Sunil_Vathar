import { DataTypes, Model } from "sequelize";
import sequelize from "../postgres/pgConfig";

interface AuthorAtributes {
  id?:number;
  name:string;
  bio:string;
  birthdate:Date;
  isSystemUser:boolean;
}

class Author extends Model<AuthorAtributes>implements AuthorAtributes{
    id?: number;
    name!: string;
    bio!: string;
    birthdate!: Date;
    isSystemUser!: boolean;
}

 Author.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  isSystemUser: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
},{sequelize,modelName:'Author'});

export default Author