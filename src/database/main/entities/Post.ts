import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Author } from './Author';

@Entity()
export class Post {

  @PrimaryGeneratedColumn()
  id: string;

  @Column('text', { nullable: false })
  title: string;

  @Column({ type: 'json', nullable: true })
  content: any

  @Column('date')
  createAt: Date

  @Column('date')
  updateAt: Date

  @ManyToOne(() => Author)
  @JoinColumn({ name: 'authorId' })
  author: Author

}