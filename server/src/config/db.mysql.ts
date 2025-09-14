import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_DB!,
  process.env.MYSQL_USER!,
  process.env.MYSQL_PASSWORD!,
  {
    host: process.env.HOST || "localhost",
    dialect: "mysql",
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialectOptions: {
      connectTimeout: 10000,
    },
  }
);

// Test Connection
const connectMySQL = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL connected successfully.");
  } catch (error: unknown) {
    console.log("Unable to connect MySQL: ", error);
    process.exit(1);
  }
};

export { sequelize, connectMySQL };
