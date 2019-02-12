import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    // console.log(this.props.messages);
    // need to loop through data array to extract username and messages.
    // .map ????
    const getMessages = this.props.messages.map((msgs) => {
      return <Message message={msgs} key={msgs.id} />;
    });
    return (
      <div>
        <main className="message">{getMessages}</main>
      </div>
    );
  }
}

export default MessageList;
