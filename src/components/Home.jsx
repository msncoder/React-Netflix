import React, { useState } from "react";
import { useEffect } from "react";
import "./Home.scss";
import axios from "axios";
import .meta.env


const apiKey = "6c2461dbaad5e1efeba6cd858e532574"
const url = `https://api.themoviedb.org/3`;
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming"
const popular = "popular";
const topRated = "top_rated";
const nowPlaying = "now_playing";

const Cards = ({ img }) => {
  return <img src={img} alt="cover" className="card" />;
};

const Row = ({
  title,
  arr = [
 
  ],
}) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => (
          <Cards key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
};

function Home() {

  let [upcomingMovies, setUpcomingMovies] = useState([]);
  useEffect(()=>{
    const fetchUpcomingMovies = async () => {
      const { data: { results } } = await axios.get(
        `${url}/movie/${upcoming}?api_key=${apiKey}`
      );
     setUpcomingMovies(results);
  
    }
    fetchUpcomingMovies();
  },[])

  console.log(upcomingMovies);
  

  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"popular on Netflix"} arr={upcomingMovies} />
      <Row title={"Movies"} />
      <Row title={"TV Shows"} />
      <Row title={"Recently Viewed"} />
      <Row title={"My List"} />
    </section>
  );
}

export default Home;
