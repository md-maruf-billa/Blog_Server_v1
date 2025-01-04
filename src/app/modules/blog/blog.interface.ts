import { Model, Types } from "mongoose";


export type TBlog = {
    title: string;
    content: string;
    author?: Types.ObjectId;
    isPublished?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?: boolean;
}

export interface BlogModelStatic extends Model<TBlog> {
    isBlogExist(id: string): Promise<TBlog | null>;
  }
  