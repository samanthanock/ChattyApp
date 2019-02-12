import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div>
        <main className="messages">
          <span className="message-username">
            {this.props.message.username}
          </span>
          <span className="message-content">{this.props.message.content}</span>
        </main>
      </div>
    );
  }
}

export default Message;
