import React, { Component } from 'react';

class WidgetMenu extends Component {
	constructor(props) {
		super(props);
	}
  render() {
    return (
      <div>
        <button>small</button>
        <button onCLick={this.setMedium.bind(this)}>medium</button>
        <button>large</button>
      </div>
    )
  }
}

export default WidgetMenu;