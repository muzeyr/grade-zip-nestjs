import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { QuizEntity } from './quiz.entity';

@Entity()
export class Class {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @ManyToOne(type => QuizEntity, quiz => quiz.classess)
  quiz: QuizEntity;
}