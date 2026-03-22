import { bootApp } from "smol-app-to-be-nested";
import { useLocation } from "react-router";
import { destroy } from "@ember/destroyable";
import { useRef } from "react";

export function EmbeddedApp() {
  let ref = useRef(null);
  let location = useLocation();

  useEffect(() => {
    if (!ref.current) return;
    console.log(location);
    let app = bootApp(elementRef, {
      root: location,
    });

    return () => destroy(app);
  }, [ref]);

  return (
    <>
      <div ref={ref}></div>
    </>
  );
}
