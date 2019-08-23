import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog } from './interfaces/blog.interface';

@Injectable()
export class BlogService {
  constructor(@Inject('BLOG_MODEL') private readonly blogModel: Model<Blog>) {}

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
      const createdBlog = new this.blogModel(createBlogDto);
      return await createdBlog.save();
  }

  async findAll() : Promise<Blog[]>{
      return this.blogModel.find().exec();
  }
}
