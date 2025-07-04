import dotenv from 'dotenv'
import express from 'express'
import router from './router/utils.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded())

app.use('/api/utils', router)

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})