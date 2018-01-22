import React, { Component } from 'react';
import data from '../mock/mock-data.js';
import ReactGridLayout from 'react-grid-layout';
import GridItem from 'react-grid-layout';
import Widget from './Widget';

//STYLES
import '../styles/drag.css';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widgets: data.widgets,
      columns: 3
    }
    this.buildLayout = this.buildLayout.bind(this);
  }
  componentDidMount() {
    this.buildLayout();
  }
  buildLayout() {
    const itemCount = 0;
    let row = 0;
    let col = 0;
    const layout = this.state.widgets.map((widget, index) => {
      col++;
      if(index % this.state.columns === 0) {
        row++;
        col = 0;
      }
      return {
        i: index.toString(),
        x: col,
        y: row,
        w: 1,
        h: 1,
        bg: widget.url
      }
    });
    this.setState({
      layout: layout
    });
    console.log(layout)
  }
  render() {
    if(this.state.layout) {
      return (
        <ReactGridLayout verticalCompact={true} className="layout" layout={this.state.layout} cols={this.state.columns} rowHeight={400} width={1200}>
          {this.state.widgets.map((widget, index) => <Widget key={index.toString()} bg={widget}>WTF</Widget> )}
        </ReactGridLayout>
      )
    }else{
      return <div>Loading...</div>
    }
    
  }
}

export default App;