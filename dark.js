const btn = document.getElementById('btn');
    function setMode(isDark) {
      btn.textContent = isDark ? '☀️' : '🌙';
      document.body.classList.toggle('dark', isDark);
      localStorage.setItem('darkMode', isDark ? 'Y' : 'N');
    }
    btn.onclick = () => { setMode(!document.body.classList.contains('dark')); };
    
    let isInitDark = false;
    isInitDark = (localStorage.getItem('darkMode') === 'Y' ||
        (localStorage.getItem('darkMode') === null && window.matchMedia('(prefers-color-scheme: dark)').matches));
    setMode(isInitDark);
   
    // 同步已打开的页面
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        setMode(localStorage.getItem('darkMode') === 'Y');
      }
    });