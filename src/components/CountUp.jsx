import { useEffect, useRef, useState } from "react";

export default function CountUp({ to, duration = 1000, suffix = "+" }) {
  const [val, setVal] = useState(0);
  const start = useRef(null);

  useEffect(() => {
    let raf = 0;
    const step = (ts) => {
      if (start.current === null) start.current = ts;
      const p = Math.min((ts - start.current) / duration, 1);
      setVal(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return (
    <>
      {val}
      {suffix}
    </>
  );
}
