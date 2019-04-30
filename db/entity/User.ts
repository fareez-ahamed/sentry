import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

type UserRole = "admin" | "user";

type PasswordType = "productive" | "initial";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column({
        default: ""
    })
    passwordHash: string;

    @Column({ default: "initial" })
    passwordType: PasswordType;

    @Column({
        default: "user"
    })
    role: UserRole;

}
