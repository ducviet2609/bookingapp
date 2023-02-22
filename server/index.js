import express from 'express'
import mongoose from 'mongoose'
import AuthRoute from './Routes/AuthRoute.js'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
mongoose.set('strictQuery', false)
mongoose
  .connect(
    'mongodb+srv://ducviet260909:Anhviet1@cluster0.fk2ll48.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
  .then(() => app.listen(5000, () => console.log('Connected to DB - Server')))

// Route
app.use('/auth', AuthRoute)
