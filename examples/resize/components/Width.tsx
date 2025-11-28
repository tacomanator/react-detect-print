import { useEffect, useRef, useState } from "react";

function Width() {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const updateWidth = () => {
      setWidth(element.clientWidth);
    };

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(element);

    const printMediaQuery = window.matchMedia("print");
    const handlePrintChange = () => {
      setTimeout(updateWidth, 0);
    };

    printMediaQuery.addEventListener("change", handlePrintChange);

    updateWidth();

    return () => {
      resizeObserver.disconnect();
      printMediaQuery.removeEventListener("change", handlePrintChange);
    };
  }, []);

  return (
    <div ref={elementRef}>
      <h3>Width: {width}</h3>
    </div>
  );
}

export default Width;
