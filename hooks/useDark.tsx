export function useDark() {
  const toggleDark = () => {
    window.__setTheme(window.__theme === 'light' ? 'halloween' : 'light');
  };
  return [toggleDark] as const;
}
