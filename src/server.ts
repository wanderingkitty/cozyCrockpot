import express from "express"
import { connect, client } from "./data/dbConnection.js" 

const app = express()
const port = process.env.PORT

// Middleware
app.use(express.json())

// Routes

/**
 * The `startServer` function attempts to connect to a server, starts listening on a specified port,
 * and logs the success or failure of the operation.
 */
// Start server

async function startServer() {
	try {
		await connect()
		app.listen(port, () => {
			console.log(`Server is running on port ${port}`, "success");
		})
	} catch(error) {
		console.log(`Failed to start server: ${error}`, "error");
		await client.close()
		process.exit(1)
	}
}

startServer()