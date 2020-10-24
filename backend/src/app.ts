import express from 'express'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors'
import bodyParser  from 'body-parser'

import videoRouter from './router/video.router'
const app = express();

const port = process.env.PORT || 3000

import './database'

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors()) 

app.use(videoRouter)

app.use(express.static(path.resolve(__dirname,'dist/public')))

export default {
  app,
  port
}