import React, { Component } from 'react';
import ChatBar from './chatbar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    // setting intial state
    this.state = {
      currentUser: { name: 'Anonymous' }, //--> if currentUser is not defined, means user is Anon
      messages: [],
      count: 0
    };
    this.socket = new WebSocket(`ws://${window.location.hostname}:3001`);
  }
  newMessage = (content) => {
    const newMsg = {
      type: 'postMessage',
      username: this.state.currentUser.name,
      content: content
    };
    this.socket.send(JSON.stringify(newMsg));
  };
  nameNotification = (newName) => {
    let notification = {
      type: 'postNotification',
      content: `${
        this.state.currentUser.name
      } has changed their username to ${newName}`
    };
    this.socket.send(JSON.stringify(notification));
  };

  updateName = (currentName) => {
    this.setState({
      currentUser: { name: currentName }
    });
    this.nameNotification(currentName);
  };
  componentDidMount() {
    this.socket.onopen = () => {
      console.log('WOOOOOO SICK A SOCKET!');
    };

    console.log('componentDidMount <App />');
    this.socket.onmessage = (event) => {
      console.log('onmessage event', event);
      let parsedData = JSON.parse(event.data);
      switch (parsedData.type) {
        case 'postMessage':
          const newMessages = this.state.messages.concat(parsedData);
          this.setState({
            messages: newMessages
          });
          break;
        case 'postNotification':
          const notification = this.state.messages.concat(parsedData);
          this.setState({
            messages: notification
          });
          break;
        case 'userCount':
          const onlineUsers = parsedData.count;
          console.log('onlineUsers', onlineUsers);
          this.setState({
            count: onlineUsers
          });
          break;
      }
    };
  }

  render() {
    return (
      <div>
        <h1>
          Hi! Type your name and message down below in the chatbar to get
          chatting.
        </h1>
        <nav className="navbar">
          users ready to get chatty: {this.state.count}
          <a href="/" className="navbar-brand">
            Chatty
          </a>
        </nav>
        <ChatBar user={this.updateName} newMessage={this.newMessage} />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
