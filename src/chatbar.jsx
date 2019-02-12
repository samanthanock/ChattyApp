import React, { Component } from 'react';

class ChatBar extends Component {
  render() {
    return (
      <div>
        <footer className="chatbar">
          <input
            className="chatbar-username"
            placeholder={this.props.user.name}
          />
          <input
            className="chatbar-message"
            placeholder="type ur damn messages here and hit the damn enter button"
          />
        </footer>
      </div>
    );
  }
}

export default ChatBar;
