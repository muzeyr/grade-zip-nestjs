import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizService } from './quiz.service';

import { QuizEntity } from './quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuizEntity])],
  providers: [QuizService],
  controllers: [
    QuizController
  ],
  exports: []
})
export class QuizModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
   
  }
}
