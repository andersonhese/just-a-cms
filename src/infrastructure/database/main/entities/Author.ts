import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Author {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: false })
  name: string;

}