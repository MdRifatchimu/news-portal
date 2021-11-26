import React, {useEffect, useState} from "react";
import "./Home.css";
import HomeServices from "./HomeServices";

const Home = source => {
  // using useState
  const [newes, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${source}&apiKey=3ea1c4e50de64b919a8373cc385e392f`
    )
      .then(res => res.json())
      .then(data => setNews(data));
  }, []);

  return (
    <div className="home-background">
      <div className="home-service-background">
        <div className="container py-5 ">
          <div className="row row-cols-3 row-cols-md-3 g-4">
            {/* using map to push data to children  */}
            {newes.map(news => (
              <HomeServices key={news.id} service={news}></HomeServices>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
