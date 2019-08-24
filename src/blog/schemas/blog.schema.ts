import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  comments: [{
    body: String,
    date: { type: Date, default: Date.now }
  }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: { type: Number, default: 0 },
    favs: { type: Number, default: 0 },
  },
});
