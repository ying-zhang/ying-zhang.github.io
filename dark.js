(function () {
  const btn = document.getElementById('btn');

  function getPreferredDarkMode() {
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function setDarkMode(isDark) {
    if (!btn) return;
    btn.textContent = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('darkMode', isDark ? 'Y' : 'N');
  }

  if (!btn) return;

  btn.onclick = () => {
    setDarkMode(!document.body.classList.contains('dark'));
  };

  const savedMode = localStorage.getItem('darkMode');
  const isInitDark = savedMode === 'Y' ||
    (savedMode === null && getPreferredDarkMode());
  setDarkMode(isInitDark);

  // Sync already-open pages when returning to this tab.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      const currentMode = localStorage.getItem('darkMode');
      setDarkMode(currentMode === 'Y' ||
        (currentMode === null && getPreferredDarkMode()));
    }
  });
})();
