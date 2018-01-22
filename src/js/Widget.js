import React, { Component } from 'react';

class Widget extends Component {
  click() {
      alert()
    }
  render() {
    const bgStyle = {
      backgroundImage: `url('${this.props.bg.url}')`,
      height: '100%',
      width: '100%',
      position: 'relative'
    }
    return (
      <div 
        className="widget" 
        key="0" 
        style={this.props.style} 
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onTouchStart={this.props.onTouchStart}
        onTouchEnd={this.props.onTouchEnd}
        >
          <div style={bgStyle}>
            <div onClick={this.click.bind(this)}>CLICK</div>
          </div>
        </div>
    )
  }
}

export default Widget;