import React, { useState } from "react";
import { useEffect } from "react";
import "./Home.scss";
import axios from "axios";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const apiKey = "6c2461dbaad5e1efeba6cd858e532574";
const url = `https://api.themoviedb.org/3`;
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const popular = "popular";
const topRated = "top_rated";
const nowPlaying = "now_playing";

const Cards = ({ img }) => {
  return <img src={img} alt="cover" className="card" />;
};

const Row = ({ title, arr = [] }) => {
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
  let [popularMovies, setPopularMovies] = useState([]);
  let [topratedMovies, setTopratedMovies] = useState([]);
  let [nowplayingmovies, setNowplayingmovies] = useState([]);
  let [AllGenremovies, setAllGenremovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };

    const fetchPopularMovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
    };

    const fetchtopratedMovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopratedMovies(results);
    };

    const fetchnowplayingmovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowplayingmovies(results);
    };

    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setAllGenremovies(genres);
    };

    getAllGenre();
    fetchnowplayingmovies();
    fetchtopratedMovies();
    fetchUpcomingMovies();
    fetchPopularMovies();
  }, []);

  // console.log(upcomingMovies);

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: popularMovies[3]
            ? `url(${imgUrl}/${popularMovies[3].poster_path})`
            : "none",
        }}
      >
        {popularMovies[3] && <h1>{popularMovies[3].original_title}</h1>}

        {popularMovies[3] && <p>{popularMovies[3].overview}</p>}
        <div>
          <button>
            <BiPlay /> Play
          </button>
          <button>
            My List <AiOutlinePlus />
          </button>
        </div>
      </div>

      <Row title={"Upcoming "} arr={upcomingMovies} />
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"TopRated"} arr={topratedMovies} />
      <Row title={"RecentlyViewed"} arr={nowplayingmovies} />

      <div className="genreBox">
        {AllGenremovies?.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
