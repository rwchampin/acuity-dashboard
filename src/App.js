import React, { Component } from 'react';
import Card from './Card';
import './App.css';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class App extends Component {
  constructor(props) {
    super(props);
    this.addBorder = this.addBorder.bind(this);
    this.state = {
      border: false
    }
  }
  addBorder() {
    this.setState({
      border: !this.state.border
    })
  }
  render() {
    return (
      <div className="app" style={this.state.border ? {border: '1px dashed black'} : {border: 'none'}}>
        <Card addBorder={this.addBorder} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
