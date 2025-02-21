import React, { useEffect, useState } from "react";
import "./FeatureSection.css";

const FeatureSection = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const features = [
    {
      title: "Enjoy on your TV.",
      description:
        "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    },
    {
      title: "Download your shows to watch on the go.",
      description: "Save your data and watch all your favorites offline.",
      img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png",
    },
    {
      title: "Watch everywhere.",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
      img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
    },
    {
      title: "Create profile for kids.",
      description:
        "Send kids on adventures with their favourites characater in a space made just for them - free with your membership.",
      img: "https://static.vecteezy.com/system/resources/previews/024/346/403/original/3d-cartoon-group-of-little-children-on-transparent-background-generative-ai-png.png",
    },
  ];

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=d6c5900195d88db225f4899887ce2777`
        );
        const data = await response.json();
        setTrendingMovies(data.results || []);
      } catch (error) {
        console.error("Failed to fetch trending movies:", error);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      {/* Trending Movies Section FIRST */}
      <div className="trending-container">
        <h2>Trending Movies</h2>
        <div className="trending-movies">
          {trendingMovies.length > 0 ? (
            trendingMovies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.title}</p>
              </div>
            ))
          ) : (
            <p>Loading trending movies...</p>
          )}
        </div>
      </div>

      <div className="container">
        <h2 className="heading">More Reasons to Watch</h2>
        <div className="features-wrapper">
          {features.map((feature, index) => (
            <div className="container1" key={index}>
              <div className="text">
                <h1>{feature.title}</h1>
                <p>{feature.description}</p>
              </div>
              <div className="image">
                <img src={feature.img} alt={feature.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
