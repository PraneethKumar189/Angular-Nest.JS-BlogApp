import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile{
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:false})
    name:string

    @Column({unique :true})
    regno:string

    @Column({nullable:false})
    branch:string

    @Column({nullable:false})
    sem:string

    @Column()
    dob:Date

    @Column({unique:true})
    email:string

}