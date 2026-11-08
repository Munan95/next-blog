import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI is not defined");

const globalForMongo = globalThis;
const client = globalForMongo._mongoClient ?? (globalForMongo._mongoClient = new MongoClient(uri));

export default client;