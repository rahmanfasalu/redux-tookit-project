import React, { MutableRefObject, useEffect } from "react";

/**
 * Outside click hook
 *
 * @param ref: Reference element
 * @param handler: outside click handler function
 * @return invoke handler function on outside click
 */
const useOnClickOutside = (
  ref: MutableRefObject<any>,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(
    () => {
      const listener = (event: MouseEvent | TouchEvent) => {
        if (ref.current && !ref.current.contains(event.target)) {
          handler(event);
        }
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    [ref, handler]
  );
};

export default useOnClickOutside;
