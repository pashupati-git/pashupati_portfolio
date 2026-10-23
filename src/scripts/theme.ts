// Seamless Dark/Light mode manager with persistence and system preference detection

export function initTheme() {
  const root = document.documentElement;

  const updateToggleIcons = (theme: 'dark' | 'light') => {
    const btns = document.querySelectorAll<HTMLButtonElement>('.theme-toggle-btn');
    btns.forEach((btn) => {
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      const sunIcon = btn.querySelector('.icon-sun') as HTMLElement | null;
      const moonIcon = btn.querySelector('.icon-moon') as HTMLElement | null;
      if (sunIcon && moonIcon) {
        if (theme === 'light') {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'block';
        } else {
          sunIcon.style.display = 'block';
          moonIcon.style.display = 'none';
        }
      }
    });
  };

  const getSavedTheme = (): 'dark' | 'light' => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
    } catch {}
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  const setTheme = (theme: 'dark' | 'light') => {
    if (theme === 'light') {
      root.dataset.theme = 'light';
    } else {
      delete root.dataset.theme;
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {}

    updateToggleIcons(theme);
  };

  // Wire up toggle buttons cleanly
  document.querySelectorAll<HTMLButtonElement>('.theme-toggle-btn').forEach((btn) => {
    // Clone or remove previous listener using dataset
    if (btn.dataset.initialized === 'true') return;
    btn.dataset.initialized = 'true';

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = root.dataset.theme === 'light' ? 'light' : 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  });

  const currentTheme = root.dataset.theme === 'light' ? 'light' : getSavedTheme();
  setTheme(currentTheme);
}

// Support Astro ClientRouter page transitions
document.addEventListener('astro:page-load', initTheme);
document.addEventListener('astro:after-swap', initTheme);
if (document.readyState !== 'loading') {
  initTheme();
} else {
  document.addEventListener('DOMContentLoaded', initTheme);
}
