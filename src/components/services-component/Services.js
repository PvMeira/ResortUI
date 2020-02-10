import React, { Component } from "react";
import Title from "../title/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum?"
      },
      {
        icon: <FaHiking />,
        title: "Fresh Hiking in nature",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum?"
      },
      {
        icon: <FaShuttleVan />,
        title: "Shuttle stops",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum?"
      },
      {
        icon: <FaBeer />,
        title: "Free Beers",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum?"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            </article>;
          })}
        </div>
      </section>
    );
  }
}
