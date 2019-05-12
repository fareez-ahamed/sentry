import { getRepository } from 'typeorm';
import { User } from '../db/entity/User';

import bcrypt = require('bcrypt')

// tslint:disable-next-line: one-variable-per-declaration
export const validateUser = (email: any, password: any): Promise < { authenticated: boolean, user: User } > => {
  return getRepository(User).find({ select: ['passwordHash'], where: { email } })
    .then(users => {
      if (users.length !== 0) {
        return users[0].passwordHash
      } else {
        throw Error('User not found')
      }
    })
    .then(originalHash => bcrypt.compare(password, originalHash))
    .then((authenticated) => (authenticated ? getRepository(User).find({ email }) : []))
    .then(users => ({ authenticated: users.length > 0, user: (users[0] ? users[0] : null)}))
}
