import { createConnection } from "typeorm";
import routes from "./routes/app/main";
import userApi from './routes/api/users';
import { nextGuard } from "./middlewares/guard";

// Express.js dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')

// Next.js integration
const next = require('next')
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

    //Trust Proxy
    server.set("trust proxy", 1)

    //Global Middlewares
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(cookieSession({ name: 'sentry', secret: '123456' }))
    server.use(nextGuard)

    //Route handler for app POST requests
    server.use('/', routes)
    server.use('/api/users', userApi)

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