import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allArticle } from "../../store/modules/article/article.slice";
import ArticleList from "./components/ArticleList";
import {
  selectAllArticles,
  selectArticleLoading,
} from "../../store/modules/article/article.selector";

const Home = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectAllArticles);
  const loading = useSelector(selectArticleLoading);
  useEffect(() => {
    dispatch(allArticle());
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <ArticleList articles={articles} />}
    </div>
  );
};

export default Home;
