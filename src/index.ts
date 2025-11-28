import { useEffect, useState } from "react";

const useDetectPrint = () => {
  const [isPrinting, setIsPrinting] = useState(false);
  const handleBeforeprint = () => setIsPrinting(true);
  const handleAfterprint = () => setIsPrinting(false);

  useEffect(() => {
    window.addEventListener("beforeprint", handleBeforeprint);
    window.addEventListener("afterprint", handleAfterprint);
    return () => {
      window.removeEventListener("beforeprint", handleBeforeprint);
      window.removeEventListener("afterprint", handleAfterprint);
    };
  });

  return isPrinting;
};

export default useDetectPrint;

export { useDetectPrint };
