import React, { Component } from 'react';

class Widget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			key: props.item.key,
			url: props.item.url,
			name: props.item.name,
			sort: props.item.sort
		}
	}
  render() {
  	const itemStyle = {
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundImage: `url('${this.props.item.url}')`
    };
    return (
      <div style={itemStyle} className="widget"><span className="name">{this.props.item.name}</span></div>
    )
  }
}

export default Widget;