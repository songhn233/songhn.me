// extrends for dark mode global function
declare global {
  interface Window {
    __theme: string;
    __setTheme: (theme: string) => void;
  }
}

export function useDark() {
  const toggleDark = () => {
    window.__setTheme(window.__theme === 'light' ? 'halloween' : 'light');
  };
  return [toggleDark] as const;
}
