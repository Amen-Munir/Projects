/* eslint-disable react/prop-types */

import "./App.css";
import data from "./data";

function Navbar() {
  return (
    <nav>
      <img src="./images/airbnb-logo.png" className="nav--logo" />
    </nav>
  );
}

function Hero() {
  return (
    <section>
      <img src="./images/photo-grid.png" className="hero--photo" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

function Card(props) {
  // console.log(props.openSpots)

  let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    } 
  return (
    <div className="card">
       {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`./images/${props.img}`} className="card--image" />
      <div className="card--stats">
        <img src="images/star.png" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default function App() {
  // console.log(data) import huraha hay phir b images nai arahi

  const cards = data.map((item) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}
