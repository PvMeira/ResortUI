import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../Context";
import Title from "../title/Title";

const getUnique = (itens, value) => {
  return [...new Set(itens.map(item => item[value]))];
};

export default function RoomFilter() {
  const context = useContext(RoomContext);
  const { handleChange, filter, rooms } = context;
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={filter.type}
            className="form-control"
            onChange={handleChange}
          >
            {["all", ...getUnique(rooms, "type")].map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacity">guest</label>
          <select
            name="capacity"
            id="capacity"
            value={filter.capacity}
            className="form-control"
            onChange={handleChange}
          >
            {getUnique(rooms, "capacity").map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">room price ${filter.price}</label>
          <input
            type="range"
            name="price"
            min={filter.minPrice}
            max={filter.maxPrice}
            id="price"
            value={filter.price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs"></div>
          <input
            type="number"
            name="minSize"
            id="size"
            value={filter.minSize}
            onChange={handleChange}
            className="size-input"
          />
          <input
            type="number"
            name="maxSize"
            id="size"
            value={filter.maxSize}
            onChange={handleChange}
            className="size-input"
          />
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={filter.breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
          <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={filter.pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}
