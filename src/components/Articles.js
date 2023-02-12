import { useState, useEffect } from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle";
const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await (await res).json();
      setArticles(data);
    }, 3000);
  });
  return (
    <div className="articles">
      <h2>Articles</h2>

      {articles &&
        articles.map((val) => {
          return (
            <div className="articles" key={val.id}>
              <h3>{val.title}</h3>
              <p>{val.body}</p>
            </div>
          );
        })}
      {!articles && [1, 2, 3, 4, 5].map((val) => <SkeletonArticle key={val} />)}
    </div>
  );
};
export default Articles;
