import React, { Component } from "react";


class Modal extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className="app">
        <h1>hihi</h1>
        <button onClick={this.togglePopup.bind(this)}>show popup</button>
        <button
          onClick={() => {
            alert("woooooooot?");
          }}
        >
          try me when popup is open
        </button>
      </div>
    );
  }
}

export default Modal;
