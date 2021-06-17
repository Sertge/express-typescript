import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { User } from "./user";

@Entity({name:'post'})
export class Post extends BaseEntity{
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  description:string;

  @Column({name:'created_date'})
  createdDate:Date;

  @Column()
  url:string

  @ManyToOne(()=>User,(user:User)=>user.posts)
    user:User
}