import React, { Component } from "react";
import { RoomContext } from "../../Context";
import Loading from "../loading/Loading";
import Room from "../room/Room";
import Title from "../title/Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-denter">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
