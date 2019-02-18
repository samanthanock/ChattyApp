import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    // console.log(this.props.messages);
    // need to loop through data array to extract username and messages.
    // .map ????
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
