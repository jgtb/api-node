import mongoose from 'mongoose'

import config from './config'

const options = { useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true }

export default async () => {
  try {
    await mongoose.connect(config.mongoDB, options)
    console.log(`Connected on MongoDB: ${config.mongoDB}.`)
  } catch ({ message }) {
    console.log({ err: message })
  }
}
