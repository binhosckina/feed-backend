import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import routes from './routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    dotenv.config()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect(
      // 'mongodb://localhost:27017/tsnode',
      'mongodb+srv://cluster0-ru6hn.mongodb.net/Feed?retryWrites=true&w=majority',
      // process.env.MONGO_URL,
      {
        auth: {
          user: process.env.MONGO_USER,
          password: process.env.MONGO_PASSWORD
        },
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
