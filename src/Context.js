import React, { Component } from "react";

import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    filter: {
      type: "all",
      capacity: 1,
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      minSize: 0,
      maxSize: 0,
      breakfast: false,
      pets: false
    }
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      filter: { ...this.state.filter, maxPrice, maxSize }
    });
  }

  handleChange = event => {
    const target = event.target;
    const value = event.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState(
      { filter: { ...this.state.filter, [name]: value } },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let { rooms, filter } = this.state;
    this.setState({ sortedRooms: this.filter(rooms, filter) });
  };

  filter = (rooms, filter) => {
    let tempRooms = [...rooms];
    if (filter.type !== "all") tempRooms = tempRooms.filter(a => a.type === filter.type);
    if (filter.price) tempRooms = tempRooms.filter(a => a.price <= parseFloat(filter.price));
    if (filter.pets) tempRooms = tempRooms.filter(a => a.pets === true);
    if (filter.minSize) tempRooms = tempRooms.filter(a => a.size >= filter.minSize);
    if (filter.maxSize) tempRooms = tempRooms.filter(a => a.size <= filter.maxSize);

    if (filter.capacity) tempRooms = tempRooms.filter(a => a.capacity >= filter.capacity);
    if (filter.breakfast) tempRooms = tempRooms.filter(a => a.breakfast === true);
    return tempRooms;
  };

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = slug => {
    let tempRoom = [...this.state.rooms];
    const room = tempRoom.find(room => room.slug === slug);
    return room;
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

// Exemplo de como fazer HighOrder component para usar em outras componentes
// export function withRoomConsumer(Component) {
//   return function ConsumerWrapper(props) {
//     return (<RoomConsumer> {value => <Component {...props} context={value}/>}</RoomConsumer>);
//   }
// }

export { RoomProvider, RoomConsumer, RoomContext };
