import { getRepository } from 'typeorm';
import { User } from '../../db/entity/User';

import express = require('express')
import { ApiResponse, IUser, ValidationResult } from '../../common/interfaces/api';
import { isEmpty } from '../../common/validators';
import { error, success, validationError } from '../../utils/api-utils';
const router = express.Router();

/**
 * Get Users
 */
router.get('/', (req, res) => {
  usersAll().then(users => {
    res.json(users)
  })
})

/**
 * Create Users
 */
router.post('/', (req, res) => {
  const data = req.body
  const result = validateCreation(data)
  if (result.valid) {
    getRepository(User).save({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    }).then(() => res.send(success('Successfully created user')))
    .catch(e => res.send(error(e.toString())))
  } else {
    res.send(validationError(result))
  }
})

/**
 * Export the router
 */
export default router

/**
 * Fetch users from the database
 */
const usersAll = () => {
  return getRepository(User).find({
    take: 10,
    skip: 0,
  });
}

/**
 * Validate the user object before saving to database
 * @param user
 */
const validateCreation = (user: IUser): ValidationResult => {

  const result: ValidationResult = {
    valid: true,
    details: [],
  }

  if (isEmpty(user.email)) {
    result.details.push({
      fieldName: 'email',
      messages: ['Email is a required field'],
    })
  }

  if (isEmpty(user.firstName)) {
    result.details.push({
      fieldName: 'firstName',
      messages: ['First Name is a required field'],
    })
  }

  if (isEmpty(user.password)) {
    result.details.push({
      fieldName: 'password',
      messages: ['Password is a required field'],
    })
  }

  result.valid = result.details.length === 0

  return result
}
