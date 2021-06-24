import React from "react";
import onElementResize from "element-resize-event";

class Width extends React.Component {
  element = {};

  componentDidMount = () => {
    onElementResize(this.element, e => this.forceUpdate());
    this.forceUpdate();
  };

  setRef = element => {
    this.element = element;
  };

  render = () => (
    <div ref={this.setRef}>
      <h3>Width: {this.element.clientWidth}</h3>
    </div>
  );
}

export default Width;
