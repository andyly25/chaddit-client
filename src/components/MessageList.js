import React, { Component } from 'react';
import './MessageList.css';

class MessagesList extends Component {
  // scroll to bottom
  // https://stackoverflow.com/questions/42670121/scroll-to-bottom-after-componentdidupdate
  componentDidUpdate() {
    const el = this.refs.scrollBottom;
    el.scrollTop = el.scrollHeight;
  }

  render() {
    return (
      <div className="message-container" ref='scrollBottom'>
        <ul className="message-ulist">
          {this.props.messages.map((message, index) => (
            <li key={index} className="message-list">
              <div>
                <span className="sender-username">{message.senderId}</span>
              </div>
              <p className="message">{message.text}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MessagesList;
