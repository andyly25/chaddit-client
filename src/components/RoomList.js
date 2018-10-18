import React, { Component } from 'react';
import './RoomList.css'

class RoomList extends Component {
  render() {
    console.log('inside roomList', this.props.rooms);
    return (
      <div className='roomlistContainer'>
        <h4 className='roomlistBorder'> Rooms </h4>
        <ul className='roomlistUl'>
          {this.props.rooms.map((room) => (
            <li key={room.id} value={room.id} className='roomlistLi'>
              {room.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };
}

export default RoomList;
