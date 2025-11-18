import { useEffect, useState } from "react";

export function useResponsiveBaseWidth() {
  const [baseWidth, setBaseWidth] = useState(520);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;

      if (w < 640) setBaseWidth(320);
      else if (w < 1024) setBaseWidth(420);
      else setBaseWidth(520);
    }

    update(); // run on mount
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return baseWidth;
}
