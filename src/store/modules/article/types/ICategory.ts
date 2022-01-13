import { IArticle } from "./IArticle";
export interface ICategory {
  id: number;
  category: string;
  createdAt: string;
  updatedAt: string;
  article: IArticle;
}
