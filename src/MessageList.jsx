import React, { Component } from 'react';

class MessageList extends Component {
  render() {
    return (
      <div>
        <div className="message">
          <span className="message-username">Anonymous1</span>
          <span className="message-content">That' don't impress me much.</span>
        </div>
        <div className="message system">
          Anonymous1 changed their name to SHANIA
        </div>
      </div>
    );
  }
}

export default MessageList;
