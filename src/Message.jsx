import React, { Compnent } from 'react';
import MessageList from './MessageList.jsx';

class Message extends Compnent {
  render() {
    return (
      <div>
        <main className="messages">
          <MessageList />
        </main>
      </div>
    );
  }
}

export default Message;
