import { BlogModule } from './blog/blog.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [BlogModule],
})
export class AppModule {}
