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
      console.log(currentName);
      this.props.updateName(currentName);
      event.target.value = ' ';
    }
  }
  render() {
    return (
      <div>
        <footer className="chatbar">
          <input
            className="chatbar-username"
            onKeyPress={this.submitName.bind(this)}
            placeholder="what is damn name?"
          />
          <input
            className="chatbar-message"
            placeholder="type ur damn messages here and hit the damn enter button"
            onKeyPress={this.submit.bind(this)}
          />
        </footer>
      </div>
    );
  }
}

export default ChatBar;
