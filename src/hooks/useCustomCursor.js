import { useEffect, useRef } from 'react';

/**
 * useCustomCursor
 * Moves a DOM cursor element with the mouse and toggles
 * a "cursor-hover" class when hovering interactive elements.
 */
export function useCustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top  = `${e.clientY}px`;
    };

    const onEnter = () => cursor.classList.add('cursor-hover');
    const onLeave = () => cursor.classList.remove('cursor-hover');

    document.addEventListener('mousemove', onMove);

    const interactives = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return cursorRef;
}
