import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToOne, JoinColumn, BeforeUpdate, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Author } from './Author';
import { PostStatusTypes } from '../interfaces/post-status-types.interface'

@Entity()
export class Post {

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('text')
  title: string;

  @Column({ type: 'json', nullable: true })
  content: any

  @Column({ type: 'enum', enum: PostStatusTypes, default: PostStatusTypes.EDITING })
  status: PostStatusTypes

  @CreateDateColumn()
  createdAt?: Date

  @UpdateDateColumn()
  updatedAt?: Date

  @ManyToOne(() => Author)
  @JoinColumn({ name: 'authorId' })
  author: Author

  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  private setUpdateDate(): void {
    this.updatedAt = new Date();
  }

}