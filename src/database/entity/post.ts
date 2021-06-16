import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

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
}