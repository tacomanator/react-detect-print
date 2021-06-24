import useDetectPrint from "react-detect-print";

function App() {
  const printing = useDetectPrint();
  const color = printing ? "blue" : "red";

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color }}>{printing ? "Print Mode" : "View Mode"}</h2>
      <p>Try printing this page...</p>
    </div>
  );
}

export default App;
