import express from 'express'
const server = express()

import bodyParser from 'body-parser'
server.use(bodyParser.json())

import router from './routes'
server.use(router)

export default server
