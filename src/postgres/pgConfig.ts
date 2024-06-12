import { Sequelize } from "sequelize";
import creaditionals from "../commons/creadtionals";

const sequelize=new Sequelize({
    // database:'postgres',
    database:creaditionals.postgres.DATABASE,
    username:creaditionals.postgres.USERNAME,
    password:creaditionals.postgres.PASSWORD,
    host:creaditionals.postgres.HOST,
    port:Number(creaditionals.postgres.DBPORT),
    dialect:'postgres'
});

sequelize.authenticate().then(()=>{
    console.log("Database Connected Sucessfully");
}).catch((err)=>{
    console.log("something wrong while connection to the Database",err);
})

sequelize.sync().then(()=>{
    console.log("tables sync sucessfully");
}).catch((err)=>{
    console.log("Did not made tables sync",err);
})

export default sequelize