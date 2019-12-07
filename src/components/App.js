import React, { Component } from "react";
import CommentsListContainer from "../container/CommentsListContainer";
import DevTools from "../container/DevTools";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1 className="App-header">List of comments</h1>
        <CommentsListContainer />
        <DevTools />
      </div>
    );
  }
}

export default App;
