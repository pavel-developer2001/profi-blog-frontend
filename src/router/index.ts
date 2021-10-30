import React from "react";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Article from "../pages/Article";
import AddArticle from "../pages/AddArticle";
import MyBookMarks from "../pages/MyBookMarks";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  HOME = "/",
  ARTICLE = "/articles/:id",
  PROFILE = "/users/:id",
  ADD_ARTICLE = "/add-article",
  BOOKMARKS = "/book-marks",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.HOME, exact: true, component: Home },
  { path: RouteNames.ARTICLE, exact: true, component: Article },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.HOME, exact: true, component: Home },
  { path: RouteNames.PROFILE, exact: true, component: Profile },
  { path: RouteNames.ARTICLE, exact: true, component: Article },
  { path: RouteNames.ADD_ARTICLE, exact: true, component: AddArticle },
  { path: RouteNames.BOOKMARKS, exact: true, component: MyBookMarks },
];
