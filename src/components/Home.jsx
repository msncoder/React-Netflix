import React from "react";
import "./Home.scss";

const Cards = ({ img }) => {
  return <img src={img} alt="cover" className="card" />;
};

const Row = ({
  title,
  arr = [
    {
      img: "https://rukminim2.flixcart.com/image/850/1000/krgohow0/poster/b/h/c/large-riverdale-netflix-series-poster-riverdale-poster-tv-series-original-imag596yhrbbchsz.jpeg?q=90&crop=false",
    },
  ],
}) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => (
          <Cards key={index} img={item.img} />
        ))}
      </div>
    </div>
  );
};

function Home() {
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"popular on Netflix"} />
      <Row title={"Movies"} />
      <Row title={"TV Shows"} />
      <Row title={"Recently Viewed"} />
      <Row title={"My List"} />
    </section>
  );
}

export default Home;
