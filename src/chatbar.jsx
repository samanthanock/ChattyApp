import React, { Component } from 'react';

class ChatBar extends Component {

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
