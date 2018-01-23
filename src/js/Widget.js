import React, { Component } from 'react';
import FaCog from 'react-icons/lib/fa/cog';
import FaTimes from 'react-icons/lib/fa/close';

class Widget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false,
      id: this.props.id
		}
	}
	menuClick() {
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}
  closeClick() {
    this.props.removeWidget(this);
  }
  render() {
    const widgetContentStyle = {
      backgroundImage: `url('${this.props.bg}')`,
      height: '100%',
      width: '100%',
      position: 'relative',
      left: this.state.menuOpen ? '-100%' : 0
    }
    const widgetMenuContentStyle = {
    	left: this.state.menuOpen ? 0 : '100%'
    }
    return (
      <div 
        className="widget" 
        key={this.props.key}
        style={this.props.style} 
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onTouchStart={this.props.onTouchStart}
        onTouchEnd={this.props.onTouchEnd}
        >
          <FaTimes className="widget-remove" onClick={this.closeClick.bind(this)} />
        	<FaCog className="widget-menu-trigger" onClick={this.menuClick.bind(this)} />
        	<div className="widget-content" style={widgetContentStyle}></div>
          <div className="widget-menu" style={widgetMenuContentStyle}>MENU CONTENT</div>
        </div>
    )
  }
}

export default Widget;