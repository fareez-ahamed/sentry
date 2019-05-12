import { getRepository } from 'typeorm';
import { User } from '../../db/entity/User';

import express = require('express')
const router = express.Router();

const usersAll = () => {
  return getRepository(User).find({
    take: 10,
    skip: 0,
  });
}

router.get('/', (req, res) => {
  usersAll().then(users => {
    res.json(users)
  })
})

export default router
