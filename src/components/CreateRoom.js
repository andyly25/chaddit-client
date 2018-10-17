import React, { Component } from 'react';

import './CreateRoom.css'

class CreateRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomName: '',
      roomPrivacy: false
    }
  }

  // onSubmit(e) {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state.text);
  //   this.setState({ text: '' });
  // }


  // currently need to work on this
  onChange(e) {
    this.setState({ roomName: e.target.value });
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  onKeyDown(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.setState({ 
        roomName: this.state.roomName,
        roomPrivacy: this.state.roomPrivacy
      });
    }
  }

  render() {
    return (
      <div>
        <form>
          <input 
            type="text"
            placeholder="Create a Room"
            onChange={this.onChange.bind(this)}
            value={this.state.roomName}
          />
        </form>
      </div>
    );
  }
}

export default CreateRoom;
