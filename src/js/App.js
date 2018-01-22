import React, { Component } from 'react';
import data from '../mock/mock-data.js';
import ReactGridLayout, {WidthProvider} from 'react-grid-layout';
import Widget from './Widget';

//STYLES & ICONS
import '../styles/drag.css';
import '../styles/App.css';

const DecoratedReactGridLayout = WidthProvider(ReactGridLayout);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widgets: data.widgets,
      columns: 3,
      rowHeight: 500
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
  }
  render() {
    if(this.state.layout) {
      return (
        <DecoratedReactGridLayout className="layout" layout={this.state.layout} cols={this.state.columns} rowHeight={this.state.rowHeight} width={1200}>
          {this.state.widgets.map((widget, index) => {
            return <div key={index.toString()}><Widget bg={widget.url} /></div> 
          })}
        </DecoratedReactGridLayout>
      )
    }else{
      return <div>Loading...</div>
    }
    
  }
}

export default App;