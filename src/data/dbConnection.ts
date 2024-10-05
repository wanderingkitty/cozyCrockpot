import { MongoClient, Db } from "mongodb"; 

const connectionString = process.env.CONNECTION_STRING
const dbName = process.env.MONGODB_DB_NAME

if(!connectionString) {
	console.error("CONNECTION_STRING is not defined in environment variables")
	process.exit(1)
}

if(!dbName) {
	console.error("MONGODB_DB_NAME is not defined in environment variables")
}

const client: MongoClient = new MongoClient(connectionString)
let db: Db

/**
 * The function `connect` establishes a connection to a database using an asynchronous operation in
 * TypeScript.
 */

async function connect() {
	try {
		await client.connect()
		db = client.db(dbName)
		console.log(`Connected to ${dbName} successfully.`, "success");
		
	} catch (error:any) {
		console.log(`Failed to connect to ${dbName}. ${error}`, "error");
		
	}
}

export { client, db, connect }