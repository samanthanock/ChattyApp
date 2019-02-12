import React, { Component } from 'react';

class ChatBar extends Component {
  render() {
    return (
      <div>
        <footer className="chatbar">
          <input className="chatbar-username" placeholder="YOUR NAME!!!!" />
          <input
            className="chatbar-message"
            placeholder="TYPE UR DARN MESSAGE AND HIT ENTER"
          />
        </footer>
      </div>
    );
  }
}

export default ChatBar;
