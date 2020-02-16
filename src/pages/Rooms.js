import React from "react";
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner";
import { Link } from "react-router-dom";
import RoomContainer from '../components/roomContainer/RoomContainer';
const Rooms = () => {
  return (
    <>
    <Hero hero="roomsHero">
      <Banner title="Our Rooms">
        <Link to="/" className="btn-primary">
          Home
        </Link>
      </Banner>
    </Hero>
    <RoomContainer/>
    </>
  );
};

export default Rooms;
