import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog } from './interfaces/blog.interface';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class BlogService {
  constructor(@Inject('BLOG_MODEL') private readonly blogModel: Model<Blog>) { }

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const createdBlog = new this.blogModel(createBlogDto);
    return await createdBlog.save();
  }

  async createPost(createPostDto: CreateCommentDto): Promise<Blog> {
    return this.blogModel.updateOne(
      { _id: createPostDto.id },
      { $push: { comments: createPostDto } }
    )
  }

  async findAll(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }
}
