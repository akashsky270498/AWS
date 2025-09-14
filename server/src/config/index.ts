import { connectMySQL } from "./db.mysql";
import { connectMongo } from "./db.mongo";

export const connectDatabases = async () => {
  await connectMySQL(),
  await connectMongo();
};
