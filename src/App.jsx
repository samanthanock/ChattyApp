import React, { Component } from 'react';
import ChatBar from './chatbar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    // setting intial state
    this.state = {
      currentUser: { name: 'Bob' }, //--> if currentUser is not defined, means user is Anon
      messages: []
    };
    // need to bind in order to use the newMessage function
    this.socket = new WebSocket(`ws://${window.location.hostname}:3001`);
  }
  // adding messages through the chatbar//
  //will need a function both in app and in chatbar to handle the event

  newMessage = (content) => {
    const newMsg = {
      type: 'postMessage',
      username: this.state.currentUser.name,
      content: content
    };
    console.log('new msg', newMsg);
    this.socket.send(JSON.stringify(newMsg));
    console.log('App JSON', this.socket.send(JSON.stringify(newMsg)));
  };
  // const newMsg = currentMessages.concat(incomingMessage);
  // this.setState({
  //   messages: newMsg
  // });

  updateName = (currentName) => {
    this.setState({
      currentUser: { name: currentName }
    });
  };
  //new message will be in here because app deals with data
  // the handler will be in chatbar because that component will handle the event

  componentDidMount() {
    this.socket.onopen = () => {
      console.log('WOOOOOO SICK A SOCKET!');
    };

    console.log('componentDidMount <App />');
    this.socket.onmessage = (event) => {
      let parsedData = JSON.parse(event.data);
      console.log('recieved msg', parsedData);
      // // distinguish b/w dif message types and update state
      const newMessages = this.state.messages.concat(parsedData);
      this.setState({
        messages: newMessages
      });
    };
    // setTimeout(() => {
    //   console.log('Simulating incoming message');
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = {
    //     id: this.state.messages.length + 1,
    //     username: 'Michelle',
    //     content: 'Hello there!'
    //   };
    //   const messages = this.state.messages.concat(newMessage);
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({ messages: messages });
    // }, 3000);
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
        <ChatBar
          user={this.state.currentUser.name}
          newMessage={this.newMessage}
        />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
