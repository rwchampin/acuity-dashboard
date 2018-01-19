import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const Types = {
  CARD: 'card'
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  static getCardSource() {
    return {
      beginDrag(props) {
        // Return the data describing the dragged item
        const item = { id: props.id };
        return item;
      },
      endDrag(props) {
        props.addBorder();
      }
    }
  };
  render() {
    // Your component receives its own props as usual
    const { id } = this.props;

    // These two props are injected by React DnD,
    // as defined by your `collect` function above:
    const { isDragging, connectDragSource } = this.props;

    if(isDragging) {
      this.props.addBorder();
      return "";
    }else{
      return connectDragSource(
        <div className="card">
          I am a draggable card number {id}
          {isDragging && ' (and I am being dragged now)'}
        </div>
      );
    }
    
  }
}

export default DragSource(Types.CARD, Card.getCardSource(), collect)(Card);




