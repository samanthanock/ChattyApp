import React, { Component } from 'react';
import ChatBar from './chatbar.jsx';
import Message from './Message.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>HELLO</h1>
        <nav className="navbar">
          <a href="/" className="navbar-brand">
            Chatty
          </a>
        </nav>
        <Message />
        <ChatBar />
      </div>
    );
  }
}

export default App;
