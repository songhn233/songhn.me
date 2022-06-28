import { useState } from 'react';

const isDarkDefault = (): boolean =>
  typeof window !== 'undefined' &&
  (window.localStorage.theme === 'dark' ||
    (!('theme' in window.localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches));

export function useDark() {
  const [isDark, setIsDark] = useState(isDarkDefault());
  const toggleDark = () => {
    setIsDark(!isDark);
    window.localStorage.theme = isDark ? 'light' : 'halloween';
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'light' : 'halloween',
    );
  };
  return [isDark, toggleDark] as const;
}
