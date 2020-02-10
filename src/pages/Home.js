import React from "react";
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <Hero>
      <Banner title="Luxurious Rooms" subTitle="Deluxe Rooms starting at $99">
        <Link to="/rooms" className="btn-primary">Our Rooms</Link>
      </Banner>
    </Hero>
  );
};

export default Home;
