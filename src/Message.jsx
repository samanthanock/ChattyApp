import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div>
        <main className="messages">
          <span className="message-username">{this.props.message.user}</span>
          <span className="messages" />
          {this.props.message.content}
        </main>
      </div>
    );
  }
}

export default Message;
