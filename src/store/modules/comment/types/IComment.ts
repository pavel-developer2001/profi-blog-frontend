import { IArticle } from "../../article/types/IArticle";
import { IUser } from "../../user/types/IUser";

export interface IComment {
  id: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  user: IUser;
  article: IArticle;
}
