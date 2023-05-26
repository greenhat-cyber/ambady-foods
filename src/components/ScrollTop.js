import React, { useEffect, useRef, } from "react";

function ScrollToTop({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const onUrlChange = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    };

    window.addEventListener("hashchange", onUrlChange);

    return () => {
      window.removeEventListener("hashchange", onUrlChange);
    };
  }, []);

  return <div ref={scrollRef}>{children}</div>;
}

export default ScrollToTop;
