import { createConnection } from "typeorm";
import { User } from "../db/entity/User";

createConnection().then((conn) => {

    let adminUser = new User();

    adminUser.age = 29;
    adminUser.firstName = "Fareez";
    adminUser.lastName = "Fareez";
    adminUser.role = "admin";

    conn.getRepository(User).save(adminUser).then(user => console.log(user));
})