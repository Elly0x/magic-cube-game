import { useEffect } from 'react';

export default function useKeyboardControls(onMove: (m: string) => void) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'r' || e.key === 'R') onMove('R');
      if (e.key === 's' || e.key === 'S') onMove('shuffle');
      if (e.key === 'z' || e.key === 'Z') onMove('undo');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onMove]);
}
