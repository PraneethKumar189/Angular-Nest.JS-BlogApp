import { User } from 'src/users/entities/users.entity';
import{Entity,Column,PrimaryGeneratedColumn, ManyToOne} from 'typeorm'

@Entity()
export class Blog{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    content:string;

    @ManyToOne(() => User, (user) => user.id)
    author: User;
}