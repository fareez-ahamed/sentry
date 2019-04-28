import { createConnection, Repository } from "typeorm";
import { User } from "../db/entity/User";

const bcrypt = require("bcrypt");

createConnection().then((conn) => {

    //Check if atleast one admin user exists
    const repo = conn.getRepository(User);

    repo.find({ role: "admin" }).then((users) => {
        if(users.length !== 0) {

            console.log("Following admins exists");

            users.map((user) => console.log(`${user.firstName} ${user.lastName}`))

        } else {

            console.log("No admin user exists. Creating one...")

            let password = "123456"

            bcrypt.hash(password, 10)
                  .then(hash => createAdmin(hash, repo))
                  .then(user => {
                      console.log(`Email: ${user.email}`);
                      console.log(`Password: ${password}`);
                  }).catch(e => console.log(e));
                  
        }

    })
})


function createAdmin(passwordHash, repo: Repository<User>) : Promise<User> {
    let adminUser = {
        email: "admin@system.com",
        firstName: "Admin",
        lastName: "Admin",
        age: 25,
        role: "admin",
        passwordHash: passwordHash
    } as User;

    return repo.save(adminUser);
}