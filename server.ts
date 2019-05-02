import { createConnection } from "typeorm";
import routes from "./routes/app/main";

const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

console.log("Starting")

app.prepare()
  .then(() => {
    //Setting up the database connection
    console.log("Setting up the Database Connection")
    return createConnection().then()
  })
  .then(() => {
    console.log("Setting up the Routes")
    const server = express()

    //Global Middlewares
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))

    //Route handler for app POST requests
    server.use('/', routes)

    //Route handler for Next.js Pages
    server.get('*', (req, res) => handle(req, res))

    //Starting the Server
    console.log("Starting the Server")
    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
    return null
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })