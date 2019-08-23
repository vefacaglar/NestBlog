import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogService } from './blog.service';
import { Blog } from './interfaces/blog.interface';

@Controller('api/Blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto) {
    this.blogService.create(createBlogDto);
  }

  @Get()
  async findAll(): Promise<Blog[]> {
      return this.blogService.findAll();
  }
}
