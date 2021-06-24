import React from "react";
import Width from "./Width";

const style = {
  flex: "1 auto",
  margin: 20,
  height: 200,
  borderWidth: 5,
  borderStyle: "solid",
  borderColor: "black",
  textAlign: "center",
  backgroundColor: "#ccc"
};

class Child extends React.Component {
  render = () => (
    <div style={style}>
      <h2>Printing? {JSON.stringify(this.props.printing)}</h2>
      <Width />
    </div>
  );
}

export default Child;
