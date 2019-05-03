import { getRepository } from "typeorm";
import { User } from "../db/entity/User";

const bcrypt = require("bcrypt")

export const validateUser = (email, password): Promise < { authenticated: boolean, user: User } > => {
  let user;
  return getRepository(User).find({ email })
    .then(users => {
      if (users.length !== 0) {
        user = users[0]
        return users[0].passwordHash
      } else {
        throw Error("User not found")
      }
    })
    .then(originalHash => bcrypt.compare(password, originalHash))
    .then(authenticated => { return { authenticated, user } })
}