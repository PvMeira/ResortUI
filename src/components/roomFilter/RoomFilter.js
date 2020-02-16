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
      </form>
    </section>
  );
}
