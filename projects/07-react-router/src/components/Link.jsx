import { EVENTS } from "../utils/consts.js";

export default function navigate(href) {
  window.history.pushState({}, "", href);
  // Crear un evento personalizado para avisar del cambio
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}
export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0; // primary click
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;

    const isManageableEvent = target === undefined || target === "_self";
    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to);
      window.scroll(0, 0);
    }
  };
  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
