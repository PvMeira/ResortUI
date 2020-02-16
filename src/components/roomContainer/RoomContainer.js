import React from "react";
import RoomList from "../roomsList/RoomList";
import RoomFilter from "../roomFilter/RoomFilter";
import LoadingComponent from "../loading/Loading";
import { useContext } from "react";
import { RoomContext } from "../../Context";

export default function RoomContainer() {
  const context = useContext(RoomContext);
  const { loading, rooms, sortedRooms } = context;
  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <RoomFilter rooms={[rooms]} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}
