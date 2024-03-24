/* eslint-disable react/prop-types */
import news from "../assets/news.jpg";

function NewsItem({ title, description, src, url }) {
  return (
    <div className="card bg-dark text-light mb-3">
      <img
        src={src ? src : news}
        className="card-img-top"
        alt="News"
        style={{ maxHeight: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Currently not available for your region!"}
        </p>
        <a href={url} className="btn btn-primary">
          Read more...
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
