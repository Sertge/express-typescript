import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Post } from "./post";
import { Role } from './role';

@Entity({ name: 'user' })
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Role, (role: Role) => role.user, { onDelete: 'CASCADE' })
  roles: Role[];

  @OneToMany(() => Post, (post:Post)=>post.user, {onDelete:"CASCADE"})
    posts: Post[]
}