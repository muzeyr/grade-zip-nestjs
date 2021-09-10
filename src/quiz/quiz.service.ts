import { HttpStatus, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeepPartial } from 'typeorm/common/DeepPartial';
import { QuizRO, QuizData } from './quiz.interface';
import {HttpException} from "@nestjs/common/exceptions/http.exception";
import { QuizEntity } from './quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizEntity)
    private readonly quizRepository: Repository<QuizEntity>) {}

  async findAll(): Promise<QuizEntity[]> {
    return await this.quizRepository.find();
  }

  async findOne(options?: DeepPartial<QuizEntity>): Promise<QuizRO> {
    const quiz = await this.quizRepository.findOne(options);
    delete quiz.id;
    return {quiz: quiz};
  }

  async findProfile(id: number, followingUsername: string): Promise<QuizRO> {
    const _quiz = await this.quizRepository.findOne( {title: followingUsername});

    if(!_quiz) return;

    let quiz: QuizData = {
        slug: _quiz.slug,
        title: _quiz.title,
        description: _quiz.description
    };

    return {quiz};
  }

}
