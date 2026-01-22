import { useEffect, useRef } from "react";

interface PageVisibilityOptions {
  onShow?: () => void;
  onHide?: () => void;
}

export function usePageVisibility({
  onShow,
  onHide,
}: PageVisibilityOptions = {}) {
  const onShowRef = useRef(onShow);
  const onHideRef = useRef(onHide);

  // Keeps latest callbacks without re-subscribing to the event listener
  useEffect(() => {
    onShowRef.current = onShow;
    onHideRef.current = onHide;
  }, [onShow, onHide]);

  // Subscribe to visibility change events
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        onShowRef.current?.();
      } else {
        onHideRef.current?.();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  return document.visibilityState === "visible"; // Return current visibility state
}