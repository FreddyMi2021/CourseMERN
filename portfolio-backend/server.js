const express = require('express')
const app = express()
const mongoose = require('mongoose')

const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const port = 4000

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=> console.log("Database connected success"))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(port, () => console.log("Server is up and running on "+port))