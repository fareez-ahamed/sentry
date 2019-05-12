import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

type UserRole = 'admin' | 'user';

type PasswordType = 'productive' | 'initial';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        unique: true,
    })
    public email: string;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public age: number;

    @Column({
        default: '',
        select: false,
    })
    public passwordHash: string;

    @Column({
        default: 'initial',
        select: false,
    })
    public passwordType: PasswordType;

    @Column({
        default: 'user',
    })
    public role: UserRole;

}
