import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    dob: string; // Date of birth as password (hashed)
  
    @Column({ nullable: true })
    profileImageUrl: string; // Profile picture URL
  
    @Column({ default: 'user' }) // Default role is 'user'
    role: string; // e.g., 'user', 'admin', etc.
}
