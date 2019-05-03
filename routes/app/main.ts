import { validateUser } from "../../core/auth"

const express = require("express")

const router = express.Router();

router.post('/login', (req, res) => {
  validateUser(req.body.email, req.body.password).then(result => {
    if (result.authenticated) {
      // Add user to session
      req.session.user = result.user
      if(result.user.role === 'admin') {
        res.redirect('/admin')
      } else {
        res.redirect('/home')
      }
    } else {
      res.send("Failure")
    }
  }).catch(e => res.send(e.toString()))
})

export default router