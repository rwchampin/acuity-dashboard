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
    this.removeWidget = this.removeWidget.bind(this);
  }
  componentDidMount() {
    this.buildLayout();
  }
  removeWidget(widget) {
    this.buildLayout(widget)
  }
  buildLayout(filter) {
    const widgets = this.state.filteredWidgets ? this.state.filteredWidgets : this.state.widgets;
    const itemCount = 0;
    let row = 0;
    let col = 0;
    let widgetElements = [];
    const filteredWidgets = widgets.filter((widget, i) => {
      if(filter) {
        if(parseInt(widget.i) === filter.state.id) {
          return false;
        }else{
          return true;
        }
      }else{
        return true;
      }
    }).map((widget, index) => {
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
      filteredWidgets: filteredWidgets
    });
  }
  render() {
    if(this.state.filteredWidgets) {
      return (
        <DecoratedReactGridLayout className="layout" layout={this.state.filteredWidgets} cols={this.state.columns} rowHeight={this.state.rowHeight} width={1200}>
          {this.state.filteredWidgets.map((widget, index) => {
            return <div key={index.toString()}><Widget id={index} removeWidget={this.removeWidget} bg={widget.bg} /></div> 
          })}
        </DecoratedReactGridLayout>
      )
    }else{
      return <div>Loading...</div>
    }
    
  }
}

export default App;