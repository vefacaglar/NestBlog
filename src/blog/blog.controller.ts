import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogService } from './blog.service';
import { Blog } from './interfaces/blog.interface';
import { async } from 'rxjs/internal/scheduler/async';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('api/Blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) { }

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogService.create(createBlogDto);
  }

  @Post("Comment")
  async createPost(@Body() createPostDto: CreateCommentDto): Promise<Blog> {
    return this.blogService.createPost(createPostDto);
  }

  @Get()
  async findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }
}
