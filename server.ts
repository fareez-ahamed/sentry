import { getRepository, createConnection } from "typeorm";
import { User } from "./db/entity/User";

const express    = require('express')
const next       = require('next')
const bodyParser = require('body-parser')
const bcrypt     = require('bcrypt')
    
const dev    = process.env.NODE_ENV !== 'production'
const app    = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  createConnection().then(() => setupExpress())
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

const validateUser = (email, password) : Promise<boolean> => {
  return getRepository(User).find({ email })
    .then(users => {
      if( users.length !== 0 ) {
        return users[0].passwordHash
      } else {
        throw Error("User not found")
      }
    })
    .then(originalHash => bcrypt.compare(password, originalHash))
}

const setupExpress = () => {

  const server = express()

  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(bodyParser.json())

  server.post('/login', (req, res) => {
    validateUser(req.body.email, req.body.password).then(result => {
      if(result) 
        res.send("Success")
      else 
        res.send("Failure")
    }).catch(e => res.send(e.toString()))
  });
    
  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })

}