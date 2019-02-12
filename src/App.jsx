import React, { Component } from 'react';
import ChatBar from './chatbar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    // setting intial state
    this.state = {
      currentUser: { name: 'Bob' }, //--> if currentUser is not defined, means user is Anon
      messages: [
        {
          username: 'Bob',
          content: 'Has anyone seen my marbles?'
        },
        {
          username: 'Anonymous',
          content: 'No, I think you lost them bro.'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>HELLO</h1>
        <nav className="navbar">
          <a href="/" className="navbar-brand">
            Chatty
          </a>
        </nav>
        <ChatBar user={this.state.currentUser} />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
