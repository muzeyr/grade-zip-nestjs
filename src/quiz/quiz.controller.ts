import { Get, Post, Delete, Param, Controller } from '@nestjs/common';
import { Request } from 'express';
import { QuizService } from './quiz.service';
import { QuizRO } from './quiz.interface';
import { User } from '../user/user.decorator';

import {
  ApiBearerAuth, ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('quizzes')
@Controller('quizzes')
export class QuizController {

  constructor(private readonly quizService: QuizService) {}

  @Get(':username')
  async getQuiz(@User('id') userId: number, @Param('username') username: string): Promise<QuizRO> {
    return await this.quizService.findProfile(userId, username);
  }


}