import { Document } from 'mongoose';

export interface Comment {
  readonly body: string;
  readonly date: Date;
}

export interface Meta {
  readonly votes: number;
  readonly favs: number;
}

export interface Blog extends Document {
  readonly title: string;
  readonly author: string;
  readonly body: string;
  readonly comments: Comment;
  readonly date: Date;
  readonly hidden: boolean;
  readonly meta: Meta;
}
