import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { blogProviders } from './blog.provider';
import { BlogService } from './blog.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BlogController],
  providers: [BlogService, ...blogProviders],
})
export class BlogModule {}
