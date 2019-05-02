import { validateUser } from "../../core/auth"

const express = require("express")

const router = express.Router();

router.post('/login', (req, res) => {
  validateUser(req.body.email, req.body.password).then(result => {
    if (result) {
      res.send("Success")
    } else {
      res.send("Failure")
    }
  }).catch(e => res.send(e.toString()))
})

export default router