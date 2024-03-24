import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {articles.map((news, i) => (
          <div key={i} className="col">
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsBoard;
