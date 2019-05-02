import { getRepository } from "typeorm";
import { User } from "../db/entity/User";

const bcrypt = require("bcrypt")

export const validateUser = (email, password): Promise < boolean > => {
  return getRepository(User).find({ email })
    .then(users => {
      if (users.length !== 0) {
        return users[0].passwordHash
      } else {
        throw Error("User not found")
      }
    })
    .then(originalHash => bcrypt.compare(password, originalHash))
}