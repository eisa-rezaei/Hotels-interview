import { useState, useEffect } from "react";

export const useSizeCheckker = () => {
  const [size, setSize] = useState(window.innerWidth > 600);
  const width = window.innerWidth > 600;

  const checkSize = () => {
    setSize(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, [width]);

  return size;
};
