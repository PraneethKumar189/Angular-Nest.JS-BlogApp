import { Profile } from 'src/profile/entites/profile.entity';

import{Entity,Column,PrimaryGeneratedColumn, ManyToOne} from 'typeorm'

@Entity()
export class Blog{
    @PrimaryGeneratedColumn()
    Blog_id:number;

    @Column()
    title:string;

    @Column()
    image:string;

    @Column()
    blog:string;

   @ManyToOne(()=>Profile,(profile)=>profile.regno)
   profiles:Profile[]
}