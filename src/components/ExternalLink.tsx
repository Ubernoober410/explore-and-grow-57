import { type AnchorHTMLAttributes, type MouseEvent, useCallback } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

/**
 * A real anchor (so middle-click, "Copy link" and keyboard activation keep
 * working) that also survives embedded previews: if the new tab is blocked, it
 * falls back to navigating the surrounding frame, then this one.
 */
const ExternalLink = ({ href, onClick, children, ...props }: ExternalLinkProps) => {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
      if (event.defaultPrevented) return;
      // Modifier clicks and middle-clicks should keep the browser's own behaviour.
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      event.preventDefault();

      const opened = window.open(href, "_blank", "noopener,noreferrer");
      if (opened) return;

      // Popups are blocked here — try the outer frame, then this one.
      try {
        if (window.top && window.top !== window.self) {
          window.top.location.href = href;
          return;
        }
      } catch {
        // The surrounding frame is from another site; not allowed to navigate it.
      }
      window.location.href = href;
    },
    [href, onClick],
  );

  return (
    <a href={href} target="_blank" rel="noreferrer" onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default ExternalLink;
