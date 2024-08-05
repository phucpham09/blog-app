import express from "express"
import pg from "pg"
import 'dotenv/config'
const db = new pg.Client({
    user:process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE
})

if(db.connect()){
    console.log("Database connected successfully!")
}
const app = express()
const port = process.env.PORT

app.listen(port, (req, res) =>{
    console.log(`Server is running on http://localhost:${port}`)
})