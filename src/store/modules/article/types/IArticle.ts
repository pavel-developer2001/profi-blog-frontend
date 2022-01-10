import { IUser } from "../../user/types/IUser";

export interface IArticle {
  id: number;
  title: string;
  text: string;
  img: null | string;
  createdAt: string;
  updatedAt: string;
  user: IUser;
}
