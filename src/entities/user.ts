import { Entity, BaseEntity, Column, PrimaryColumn } from 'typeorm'

@Entity('users')
export class User extends BaseEntity {

    @PrimaryColumn({})
    id: number;

    @Column({
        unique: true,
    })
    username: string;

    @Column({})
    email: string;

    @Column({
        nullable: true
    })
    dob: string;

    @Column({})
    password: string;

    @Column({
        default: false
    })
    is_disabled: boolean;

}