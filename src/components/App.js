import React, { Component } from "react";
import CommentsListContainer from "../container/CommentsListContainer";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1 className="App-header">List of comments</h1>
        <CommentsListContainer />
      </div>
    );
  }
}

export default App;
