import React from "react";

/*
  method of detecting print adapted from:
  www.tjvantoll.com/2012/06/15/detecting-print-requests-with-javascript/
*/

export default WrappedComponent =>
  class DetectPrint extends React.Component {
    state = { printing: false };

    list = typeof(window) !== 'undefined' && window.matchMedia && window.matchMedia("print");

    handleEvent = list => {
      this.setState({ printing: !!list.matches });
    };

    componentWillMount = () => {
      this.list && this.list.addListener(this.handleEvent);
    };

    componentWillUnmount = () => {
      this.list && this.list.removeListener(this.handleEvent);
    };

    render = () => (
      <WrappedComponent {...this.props} printing={this.state.printing} />
    );
  };
