import { Module } from '@nestjs/common';
import { BlogControllerController } from './blog-controller/blog-controller.controller';
import { BlogServiceService } from './blog-service/blog-service.service';

@Module({
  controllers: [BlogControllerController],
  providers: [BlogServiceService]
})
export class BlogsModule {}
