// Scroll reveal animation observer using IntersectionObserver

export function initReveal() {
  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1,
    }
  );

  elements.forEach((el) => {
    observer.observe(el);
  });
}

document.addEventListener('astro:page-load', initReveal);
if (document.readyState !== 'loading') {
  initReveal();
} else {
  document.addEventListener('DOMContentLoaded', initReveal);
}
