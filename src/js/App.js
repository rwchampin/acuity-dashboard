import React, { Component } from 'react';
import createAbsoluteGrid from './lib/AbsoluteGrid';
import Widget from './Widget';
import data from '../mock/mock-data.js';
import * as _ from 'lodash';

//STYLES
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data.screens
    }
  }
  onDragMove(source, target) {
    console.log(source, target)
  }
  onMove(source, target){
    console.log(this.state.items[0])
    // source = _.find(this.state.item, {key: parseInt(source, 10)});
    // target = _.find(this.state.item, {key: parseInt(target, 10)});

    // const targetSort = target.sort;

    //CAREFUL, For maximum performance we must maintain the array's order, but change sort
    // const reorderedItems = this.state.items.map(function(item){
    //   //Decrement sorts between positions when target is greater
    //   if(item.key === source.key) {
    //     return {
    //       ...item,
    //       sort: targetSort
    //     }
    //   } else if(target.sort > source.sort && (item.sort <= target.sort && item.sort > source.sort)){
    //     return {
    //       ...item,
    //       sort: item.sort - 1
    //     };
    //   //Increment sorts between positions when source is greater
    //   } else if (item.sort >= target.sort && item.sort < source.sort){
    //     return {
    //       ...item,
    //       sort: item.sort + 1
    //     };
    //   }
    //   return item;
    // });
    this.setState({
      items: []
    });
  }
  onMoveDebounced() {
    _.debounce(this.onMove.bind(this), 40);
  }
  render() {
    const AbsoluteGrid = createAbsoluteGrid(Widget);
    return (
      <AbsoluteGrid items={this.state.items} 
                    dragEnabled={true} 
                    responsive={true} 
                    onMoveDebounced={this.onMoveDebounced.bind(this)} 
                    verticalMargin={42}
                    itemWidth={230}
                    itemHeight={409} />
    )
  }
}

export default App;