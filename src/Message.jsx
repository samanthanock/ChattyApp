import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div>
        <main className="messages">
          <span className="message-username">
            {this.props.message.username}
          </span>
          <span className="messages" />
          {this.props.messages}
        </main>
      </div>
    );
  }
}

export default Message;
