import useDetectPrint from "react-detect-print";
import React from "react";
import Child from "./Child";

const margin = 20;

const mapPropsToStyle = (props) => ({
  margin,
  borderWidth: 5,
  borderStyle: "solid",
  borderColor: "black",
  textAlign: "center",
  boxSizing: "border-box",
  MozBoxSizing: "border-box",
  WebkitBoxSizing: "border-box",
  width: props.printing ? 816 - margin * 2 : null,
});

const childrenStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexFlow: "row wrap",
};

const App = (props) => {
  const printing = useDetectPrint();

  return (
    <div style={mapPropsToStyle(props)}>
      <h2>Printing? {JSON.stringify(printing)}</h2>
      <div style={childrenStyle}>
        <Child printing={printing} />
        <Child printing={printing} />
      </div>
    </div>
  );
};

export default App;
