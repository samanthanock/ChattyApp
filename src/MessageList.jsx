import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    const getMessages = this.props.messages.map((msgs) => {
      if (msgs.type === 'postMessage') {
        return <Message message={msgs} key={msgs.id} />;
      } else if (msgs.type === 'postNotification') {
        return <div className="message system">{msgs.content}</div>;
      }
    });
    return <main className="message">{getMessages}</main>;
  }
}

export default MessageList;
