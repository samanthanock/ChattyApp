import React, { Component } from 'react';

class ChatBar extends Component {
  //need to create event handler for new message input
  // event needs to listen to messages being submitted on the strike of the enter key
  // dun dun dunnnnnnnnn
  submit(event) {
    if (event.key === 'Enter') {
      const inputText = event.target.value;
      this.props.newMessage(inputText);
      console.log('txt', inputText);
      event.target.value = ' ';
    }
  }
  submitName(event) {
    if (event.key === 'Enter') {
      const currentName = event.target.value;
      console.log('username props', this.props);
      this.props.user(currentName);
    }
  }
  render() {
    return (
      <div>
        <footer className="chatbar">
          <input
            className="chatbar-username"
            onKeyPress={this.submitName.bind(this)}
            placeholder="Type username and hit enter!"
          />
          <input
            className="chatbar-message"
            placeholder="Type ur message and hit"
            onKeyPress={this.submit.bind(this)}
          />
        </footer>
      </div>
    );
  }
}

export default ChatBar;
