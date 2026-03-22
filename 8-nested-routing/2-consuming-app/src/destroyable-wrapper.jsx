import { bootApp } from "smol-app-to-be-nested";
import { destroy } from "@ember/destroyable";
import { useRef, useEffect } from "react";
import { useLocation } from '@tanstack/react-router';                                 

export function EmbeddedApp() {
  let ref = useRef(null);
  let location = useLocation();

  useEffect(() => {
    if (!ref.current) return;
    console.log(location.pathname);
    let app = bootApp(ref.current, {
      root: location.pathname,
    });

    return () => destroy(app);
  }, [ref]);

  return (
    <>
      <div ref={ref}></div>
    </>
  );
}
